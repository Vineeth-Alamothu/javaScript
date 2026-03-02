// Open/Closed Principle

// A class should be open for extension but closed for modification

class PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of ${amount}`);
    }
}

class PayPalPaymentProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of ${amount} using PayPal`);
    }
}

class CreditCardPaymentProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of ${amount} using Credit Card`);
    }
}

const paypal = new PayPalPaymentProcessor();
const creditCard = new CreditCardPaymentProcessor();

paypal.processPayment(100);
creditCard.processPayment(200);
