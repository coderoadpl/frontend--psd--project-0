const initCalculator = (function () {

    const sumNumbersFromString = function (numbersInString) {

        const numbers = numbersInString.split(',')

        let sum = 0

        for (let i = 0; i < numbers.length; i++) {

            const number = Number(numbers[i])

            sum = sum + number

        }

        return sum

    }

    const renderResult = function (value) {

        const result = sumNumbersFromString(value)

        if (Number.isNaN(result)) {
            return 'Error in input!'
        }

        return 'Sum is: ' + result

    }

    const render = function () {

        const container = document.createElement('div')
        const input = document.createElement('input')
        const p = document.createElement('p')

        p.innerText = renderResult(input.value)

        input.addEventListener(
            'input',
            function () {
                p.innerText = renderResult(input.value)
            }
        )

        container.appendChild(input)
        container.appendChild(p)

        return container
    }

    const init = function (containerSelector) {

        const container = document.querySelector(containerSelector)

        if (!container) {
            console.error('Container not found in document!')
            return
        }

        const app = render(container)

        container.appendChild(app)

    }

    return init

})()