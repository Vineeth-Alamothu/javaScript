// Interface Segregation Principle

// A client should not be forced to depend on interfaces they do not use

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getUserDetails() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

class EmailService {
    sendEmail(email, message) {
        console.log(`Sending email to ${email}: ${message}`);
    }
}

const user = new User("John Doe", "john@example.com");

const emailService = new EmailService();

console.log(user.getUserDetails());

emailService.sendEmail(user.email, "Hello, John!");