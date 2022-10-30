
export function indexedDbUtils(options = {
  dbVersion: 1,
  dbName: "todo",
  storeName: "todo",
  storeKeyPath: undefined
}) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(options.dbName, options.dbVersion);
    request.addEventListener("success", e => {
      console.log("db success");
      const db = e.target.result;
      resolve({
        addItem: item => addItem(db, options.storeName, item),
        listAll: () => retriveAllData(db, options.storeName),
        updateItem: (key, data) => updateItem(db, options.storeName, key, data),
        deleteItem: key => deleteItem(db, options.storeName, key)
      });
    });

    // upgradeneeded 事件用于创建表
    request.addEventListener("upgradeneeded", e => {
      console.log("db upgradeneeded");
      const thisDb = e.target.result;
      if (!thisDb.objectStoreNames.contains(options.storeName)) {
        thisDb.createObjectStore(options.storeName, {
          autoIncrement: true,
          keyPath: options.storeKeyPath
        });
      }
    });
  });
}

/**
 * 
 * @param {IDBDatabase} db 
 * @returns 
 */
function addItem(db, storeName, data) {
  const transaction = db.transaction([storeName], "readwrite");
  const store = transaction.objectStore(storeName);
  const request = store.add(data);
  return promisify(request);
}


/**
 * 
 * @param {IDBDatabase} db 
 * @param {string} storeName
 */
function deleteItem(db, storeName, key) {
  const transacation = db.transaction([storeName], "readwrite");
  const store = transacation.objectStore(storeName);
  const request = store.delete(key);
  return promisify(request);
}

/**
 * 
 * @param {IDBDatabase} db 
 * @param {string} storeName
 */
function updateItem(db, storeName, key, item) {
  const transacation = db.transaction([storeName], "readwrite");
  const store = transacation.objectStore(storeName);
  const request = store.put(item, key)
  return promisify(request);
}

function promisify(request) {
  return new Promise((resolve, reject) => {
    request.addEventListener("error", err => reject(err));
    request.addEventListener("success", () => resolve());
  });
}


/**
 * 
 * @param {IDBDatabase} db 
 * @param {string} storeName
 */
function retriveAllData(db, storeName) {
  const transaction = db.transaction([storeName], "readonly");
  const store = transaction.objectStore(storeName);
  const cursor = store.openCursor();
  const list = [];
  return new Promise((resolve, reject) => {
    cursor.addEventListener("success", e => {
      const result = e.target.result;
      if (result) {
        list.push({ raw: result.value, key: result.key });
        result.continue();
      } else {
        // 所有数据加载完成
        resolve(list);
      }
    });
    cursor.addEventListener("error", err => {
      reject(err);
    });
  });
}