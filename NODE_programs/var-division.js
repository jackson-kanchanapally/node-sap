    try {
        const dividend = 10;
        const divisor = 0;
        const result = dividend / divisor;
        console.log(`Result: `+result);
    } catch (error) {
        console.error(`Error: `+error.message);
        return null; // Return null in case of an error
    } finally {
        console.log("Division operation completed."); // This code will always run
    }


// Example usage
const dividend = 10;
const divisor = 2;

const result = divide(dividend, divisor);

if (result !== null) {
    console.log(`Result: ${result}`);
} else {
    console.log("Division failed.");
}
