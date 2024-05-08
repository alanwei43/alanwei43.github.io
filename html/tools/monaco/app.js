(function () {
  require.config({ paths: { vs: './monaco-editor/min/vs' } });
  const source = "monaco-editor";

  const params = new URLSearchParams(location.search);
  const options = JSON.parse(params.get("create") || "{}");
  const isDebug = params.get("debug") === "1";

  /**
   * @type {Promise<monaco.editor.IStandaloneCodeEditor>}
   */
  const monaco_editor = new Promise(resolve => {
    isDebug && console.log(`接收到初始化参数: `, options);
    require(['vs/editor/editor.main'], function () {
      const container = document.getElementById('container');
      isDebug && console.log(`开始初始化`);
      const editor = monaco.editor.create(container, options);
      resolve(editor);
      isDebug && console.log(`初始化完成`);

      editor.onDidChangeModelContent(function () {
        isDebug && console.log(`编辑器内容发生变化, 最新内容为: \n`, editor.getValue());
        window.parent.postMessage({
          source: source,
          action: "change",
          payload: editor.getValue()
        }, "*");
      });
    });
  });

  function resetStates() {
    // reset state
  }

  window.addEventListener("resize", function () {
    resetStates();
    monaco_editor.then(editor => {
      editor.layout();
    });
  });

  window.addEventListener("message", function (e) {
    const data = e.data;
    isDebug && console.log("child receive message event: ", data);
    if (data && data.source === source && data.action === "update") {
      monaco_editor.then(editor => {
        editor.setValue(data.payload);
      })
    }
  });
})();