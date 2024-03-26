// Function to create a promise that resolves after a random time between min and max seconds
function createPromise(min, max) {
    const randomTime = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    return new Promise(resolve => {
        setTimeout(() => resolve(randomTime / 1000), randomTime);
    });
}

// Create an array of 3 promises
const promises = [
    createPromise(1, 3),
    createPromise(1, 3),
    createPromise(1, 3)
];

// Display loading text in the table
document.getElementById('results').innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

// Use Promise.all to wait for all promises to resolve
Promise.all(promises)
    .then(times => {
        // Calculate total time taken
        const totalTime = times.reduce((acc, curr) => acc + curr, 0);

        // Populate the table with the results
        document.getElementById('results').innerHTML = `
            <tr><td>Promise 1</td><td>${times[0]}</td></tr>
            <tr><td>Promise 2</td><td>${times[1]}</td></tr>
            <tr><td>Promise 3</td><td>${times[2]}</td></tr>
            <tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>
        `;
    });
