
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('calculation-form');
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Evita el envío del formulario

                // Obtén el valor del producto de origen
                const origen = parseFloat(document.getElementById('origen').value);

                // Calcula el producto resultado y el desperdicio
                const productResult = origen * 0.78;
                const waste = origen * 0.22;

                // Muestra los resultados
                document.getElementById('resultado').textContent = `Filete de pechuga: ${productResult.toFixed(2)}`;
                document.getElementById('desperdicio').textContent = `Desperdicio: ${waste.toFixed(2)}`;
            });
        });