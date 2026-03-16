1. What is process.argv?
    answer - process.argv is array containing the command-line arguments passed by the user, when the first element will be process.execPath. The second element will be the Current runtime file.The remaining elements are additional command-line arguments pass by the user.
2. What is the difference between require and import?
    answer - Calling require() always use the CommonJS module loader. Calling import() always use the ECMAScript module loader.
    more diffrent:
    Key Features of require:
        1. Dynamic Loading: require() can be used anywhere in the code, meaning modules can be conditionally loaded.
        2. Synchronous: Modules are loaded synchronously, which means the execution waits for the required module to be fully loaded before continuing.
        3. Single Export Object: A module can export multiple properties, but they are grouped into a single object.
        4. CommonJS Standard: It's specific to NodeJS and not native to browsers.
    Key Features of import:
        1. Static Imports: Modules are loaded at the top of the file, making them statically analyzable, and cannot be conditionally loaded (though dynamic imports can be done with import()).
        2. Asynchronous: ES6 modules are asynchronous by default, meaning they are loaded non-blockingly.
        3. Named and Default Exports: A module can export multiple values, and they can be imported individually by name.
        4. Native to JavaScript: This module system is a standard in modern JavaScript and works in both NodeJS and browser environments.
