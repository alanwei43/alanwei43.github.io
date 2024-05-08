require.config({ paths: { vs: './monaco-editor/min/vs' } });
window.monaco_editor = null;

window.addEventListener("message", function (e) {
  console.log("child receive message event: ", e);
  const data = e.data;
  if (data && data.action === "create") {
    require(['vs/editor/editor.main'], function () {
      const container = document.getElementById('container');
      if (window.monaco_editor) {
        // 已经初始化过
        window.monaco_editor.setValue(data.payload.value);
        return;
      }
      window.monaco_editor = monaco.editor.create(container, data.payload);

      window.addEventListener("resize", function () {
        resetStates();
        editor.layout();
      });

      editor.onDidChangeModelContent(function () {
        window.parent.postMessage({
          action: "update",
          payload: {
            value: editor.getValue()
          }
        });
      });
    });
  }
})


function resetStates() {
  // reset state
}

window.addEventListener("DOMContentLoaded", function () {
  resetStates();
});

