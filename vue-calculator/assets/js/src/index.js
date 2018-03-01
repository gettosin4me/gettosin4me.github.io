'use strict';

import Vue from './vue/dist/vue.common';

var vm = new Vue({
    el: "#app",
    data: {
        screen: 0,
        firstValue: '',
        secondValue: '',
        logic: null,
        answer: '',
        memories: [],
        memoryIndex: 0,
    },
    methods: {
        setNumber(val) {
            if (this.logic === null) {
                this.firstValue += val
                this.screen = this.firstValue
            } else {
                this.secondValue += val
                this.screen = this.secondValue
            }
        },
        calculate() {
            if(this.logic === null){
                return void 0;
            }
            let firstValue = parseFloat(this.firstValue);
            let secondValue = parseFloat(this.secondValue);
            switch (this.logic) {
                case '+':
                    this.answer = firstValue + secondValue;
                    break;
                case '-':
                    this.answer = firstValue - secondValue;
                    break;
                case '*':
                    this.answer = firstValue * secondValue;
                    break;
                case '/':
                    this.answer = firstValue / secondValue;
                    break;
            }

            //this.screen = firstValue + ' ' + this.logic + ' ' + secondValue + ' = ' + this.answer;
            this.screen = this.answer;
            this.firstValue = '' + this.answer + '';
            this.secondValue = '';
            this.logic = null;
        },
        getMemories() {
            if (this.memories.length === 0) {
                this.screen = 0;
                return void 0;
            }
            let index = this.memoryIndex
            let totalValues = (this.memories.length - 1)
            this.screen = this.memories[index];
            this.firstValue = this.screen;

            if (index === totalValues) {
                this.memoryIndex = 0;
            } else {
                this.memoryIndex++;
            }
            // console.log(this.memoryIndex + ' ' + totalValues + ' ' + this.memories[index]);
        },
        saveToMemory() {
            this.memories.push(this.screen);
            this.reset();
        },
        removeFromMemory() {
            this.memories.splice(this.memoryIndex - 1, 1);
            if (this.memories.length > 0) {
                if (this.memories.lastIndexOf(this.screen) === (this.memories.length - 1)) {
                    this.memoryIndex = 0
                    this.screen = this.memories[this.memoryIndex]
                } else {
                    this.screen = this.memories[this.memoryIndex - 1];
                }
            } else {
                this.screen = 0;
            }
        },
        rootNumber() {
            let firstValue = parseFloat(this.firstValue);
            this.answer = Math.sqrt(firstValue);
            this.firstValue = this.answer;
            this.screen = this.answer;
        },
        reset() {
            this.firstValue = '';
            this.secondValue = '';
            this.answer = 0;
            this.screen = 0;
            this.logic = null;
        },
        off() {
            this.firstValue = '';
            this.secondValue = '';
            this.answer = 0;
            this.screen = '';
            this.logic = null;
        },
        percentage () {
            let firstValue = parseFloat(this.firstValue);
            this.answer = (firstValue / 100);
            this.firstValue = this.answer;
            this.screen = this.answer;
        },
        negativeNumber () {
            let firstValue = parseFloat(this.firstValue);
            this.firstValue = (firstValue * -1);
            this.screen = this.firstValue;
        }
    },
    filters: {
        formatScreen(value) {
            return value.toLocaleString();
        }
    }
})

export default vm;