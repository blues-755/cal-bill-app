const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');  
const totalExpensesOutput = document.querySelector('#total-expenses');
// const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;



//-lunga-- this fn should be called after we have added our items
const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};
confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;   

    if(
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0
    ) {
        //    alertCtrl.create({
        //        message: 'Please enter a valid reason and amount',
        //        header: 'Invalid inputs',
        //        buttons: ['Okay']
        //    }).then(alertElement => {
        //        alertElement.present(); 
        //    });
        function presentAlert() {
            const alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = 'Invalid inputs';
            alert.message = 'Please enter a valid reason and amount.';
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();
          }
            return presentAlert();
    };

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': R' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = 'R ' + totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);