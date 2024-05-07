require.config({ paths: { vs: './monaco-editor/min/vs' } });

window.addEventListener("message", function (e) {
  console.log("child receive message event: ", e);
  const data = e.data;
  if (data && data.action === "create") {
    require(['vs/editor/editor.main'], function () {
      const container = document.getElementById('container');
      const editor = monaco.editor.create(container, data.payload);

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