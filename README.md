# QR Code Generator

- **Project Overview**: Created a QR Code generator that takes a URL as input via the Command Line and generates a QR image file with a `.png` extension, along with a `.txt` file to store the input URL.
- **Key Features**:
  - Validates the URL using regex to ensure it is a valid URL.
  - Uses the `qr-image` NPM package to generate the QR code image. [qr-image Documentation](https://www.npmjs.com/package/qr-image)
  - Utilizes the `inquirer` NPM package for handling command line input. [inquirer Documentation](https://www.npmjs.com/package/inquirer)
  - Outputs a `.png` file for the QR code and a `.txt` file containing the URL.

## How to Use

1. Install the required NPM packages:
   ```bash
   npm install qr-image inquirer
   ```
2. Run the QR Code generator script:

   ```bash
   node index.js
   ```
