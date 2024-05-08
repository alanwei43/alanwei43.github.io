(function () {
  require.config({ paths: { vs: './monaco-editor/min/vs' } });
  const source = "monaco-editor";
  const params = new URLSearchParams(location.search);

  /**
   * @type {Promise<monaco.editor.IStandaloneCodeEditor>}
   */
  const monaco_editor = new Promise(resolve => {
    require(['vs/editor/editor.main'], function () {
      const container = document.getElementById('container');
      const options = JSON.parse(params.get("create") || "{}");
      const editor = monaco.editor.create(container, options);
      resolve(editor);

      editor.onDidChangeModelContent(function () {
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
    console.log("child receive message event: ", data);
    if (data && data.source === source && data.action === "update") {
      monaco_editor.then(editor => {
        editor.setValue(data.payload);
      })
    }
  });
})();