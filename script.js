document.getElementById('sourceForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const sourceCode = document.getElementById('sourceCode').value;
    const semanticErrors = analyzeSemantics(sourceCode);

    displayErrors(semanticErrors);
});

function analyzeSemantics(sourceCode) {
    // Aquí se realizaría el análisis léxico, sintáctico y semántico del código fuente.
    // Por simplicidad, se simulará un análisis semántico básico.
    const semanticErrors = [];

    // Ejemplo de comprobación semántica: detectar asignación a una variable no definida
    if (sourceCode.includes('=')) {
        const variableName = sourceCode.split('=')[0].trim();
        if (!isValidVariable(variableName)) {
            semanticErrors.push(`Variable '${variableName}' no definida.`);
        }
    }

    // Devolver los errores semánticos encontrados
    return semanticErrors;
}

function isValidVariable(variableName) {
    // Simulación de una lista de variables definidas en el código fuente
    const definedVariables = ['x', 'y', 'z'];
    return definedVariables.includes(variableName);
}

function displayErrors(errors) {
    const errorsTextArea = document.getElementById('errorsTextArea');
    errorsTextArea.value = ''; // Limpiar cualquier contenido anterior

    if (errors.length === 0) {
        errorsTextArea.value = 'No se encontraron errores semánticos.';
    } else {
        errors.forEach(error => {
            errorsTextArea.value += error + '\n';
        });
    }
}
