import React, {Component} from "react";
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

export default class Calculator extends Component {

    state = { ...initialState };

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    };
    
    clearMemory() {
        // retornando o estado atual para o estado inicial
        this.setState({...initialState});
    };

    setOperation(operation) {
        // console.log(operation);
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values];
            
            // refatorando utilizando o switch/case para evitar a funcao eval 

            switch(currentOperation) {
                case '+': 
                    values[0] = values[0] + values[1]
                    values[1] = 0
                break
                case '-': 
                    values[0] = values[0] - values[1]
                    values[1] = 0
                break
                case '*': 
                    values[0] = values[0] * values[1]
                    values[1] = 0
                break
                case '/': 
                    values[0] = values[0] / values[1]
                    values[1] = 0
                break

                default: return null
            }

            // try {
            //     values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            //     if (isNaN(values[0]) || !isFinite(values[0])) {
            //         this.clearMemory()
            //         return
            //     }
            // } catch(e) {
            //     values[0] = this.state.values
            // }
            // values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals, 
                values
            });
        };

    };

    addDigit(n) {
        // prevenindo duas virgulas  
        if (n === '.'&& this.state.displayValue.includes('.')) {
            return
        }

        // limpa o display quando o numero for 0 OU quando a variavel clearDisplay for true
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        // se clearDisplay for true, o valor mostrado sera vazio, se nao sera o valor atual
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            // adicionando o valor da calculadora para a o index i do array current
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
            console.log(values);
        }
    };

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/> 
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation/>
            </div>
        );
    };
};