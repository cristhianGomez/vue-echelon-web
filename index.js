module.exports=(api,options)=>{

    api.render('./template');

    api.extendPackage({
        dependencies:{
            '@fontawesome/fontawesome-free': '^5.7.0'
        }
    });
    api.injectImport(api.entryFile, `import @fontawesome/fontawesome-free/all.css`)
}
