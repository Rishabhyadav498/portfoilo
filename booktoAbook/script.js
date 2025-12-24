// Select elements
const fileInput1 = document.getElementById("fileinput1");
const readBtn1 = document.getElementById("readbtn");

// Function to handle file reading
const f1 = () => {
    const file1 = fileInput1.files[0];
    if (!file1) {
        alert("Please select a PDF file first");
        return;
    }

    //Call convert() function
    convert(file1);
};

// Add event listener properly
readBtn1.addEventListener("click", () => convert(fileInput1.files[0]));

//Async function to handle file conversion
const convert = async (file1) => {
    try {
        console.log("Reading PDF...");

        // Read file into an ArrayBuffer
        const arrayBuffer1 = await file1.arrayBuffer();

        // Example: placeholder for actual PDF processing
        console.log("PDF loaded successfully:", file1.name);
        console.log("ArrayBuffer length:", arrayBuffer1.byteLength);

        // TODO: Add code here to process the PDF (e.g., using PDF.js)
    } catch (err) {
        console.error("Error reading PDF:", err);
    }
};
console.log("no")