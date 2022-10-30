import { indexedDbUtils } from "./indexedDbUtils.js";

document.addEventListener("DOMContentLoaded", () => {
  indexedDbUtils({
    dbVersion: 3,
    dbName: "db-todo",
    storeName: "store-todo"
  }).then(utils => {
    document.querySelector("#form")
      .addEventListener("submit", e => {
        e.preventDefault();
        const content = document.querySelector("input[name='todo.content']");
        utils.addItem({
          key: generateKey(),
          content: content.value,
          addDate: new Date().toLocaleString(),
          finishDate: null,
        }).then(() => {
          listAllTodo(utils);
          content.value = "";
        });
      });

    listAllTodo(utils);

    const eleTodoList = document.querySelector("#todo-list");
    eleTodoList.addEventListener("click", e => {
      const target = e.target;
      if (target.tagName === "BUTTON") {
        // 删除
        const data = JSON.parse(target.dataset.todo);
        utils.deleteItem(data.key).then(() => listAllTodo(utils));
      }
    })

    eleTodoList.addEventListener("change", e => {
      const checked = e.target.checked;
      if (typeof checked === "boolean") {
        const data = JSON.parse(e.target.dataset.todo);
        data.raw.finishDate = checked ? new Date().toISOString() : null;
        utils.updateItem(data.key, data.raw).then(() => listAllTodo(utils));
      }
    });
  });
});

function listAllTodo(utils) {
  utils.listAll().then(data => {
    document.querySelector("#todo-list").innerHTML = data
      .sort((prev, next) => {
        if (prev.raw.finishDate && !next.raw.finishDate) {
          return 1;
        }
        if (!prev.raw.finishDate && next.raw.finishDate) {
          return -1;
        }
        return next.key - prev.key;
      })
      .map(item => `
<li class="${item.raw.finishDate ? 'done' : ''}">
  <input type="checkbox" ${item.raw.finishDate ? "checked" : ""} data-todo='${JSON.stringify(item)}' />
  <span>${item.raw.content}</span>
  <i>${item.raw.addDate}</i>
  <button data-todo='${JSON.stringify(item)}'>Delete</button>
</li>
`).join("");
  });
}

function generateKey() {
  return [
    Date.now().toString(16),
    Math.random().toString(16).split(".")[1]
  ].join(":");
}