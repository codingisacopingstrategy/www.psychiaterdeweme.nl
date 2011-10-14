tinyMCE.init({
    mode: "textareas",
    theme: "rjcdeweme",
    plugins: "spellchecker,directionality,paste,searchreplace",
    language: "{{ language }}",
    directionality: "{{ directionality }}",
    spellchecker_languages : "{{ spellchecker_languages }}",
    spellchecker_rpc_url : "{{ spellchecker_rpc_url }}",
    extended_valid_elements : "iframe[src|width|height|name|align]"
});