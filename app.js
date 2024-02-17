Vue.createApp({
    //must be called data, can be a function, or a prop that returns a function
    data() {
        return {
            goals: [],
            // name of v-model used in html
            enteredValue: ''
        };
    },
    //defines methods or functions that should be callable from inside the html code
    methods: {
        // will set click event on button for this method to handle input
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');
//adding mount to the end of the App, will specify where to apply the defined behavior

// // access to input to read entered value
// const inputEl = document.querySelector('input');
// // access to the button 
// const buttonEl = document.querySelector('button');
// // access to the list to add new listItems
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredVal = inputEl.value;
//     const listIemEl = document.createElement('li');
//     listIemEl.textContent = enteredVal;
//     listEl.appendChild(listIemEl);

//     //clear input after adding to list
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

// adding m