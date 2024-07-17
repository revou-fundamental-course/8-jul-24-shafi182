document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil input dari form
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // konversi ke meter

    // Validasi input
    if (isNaN(weight) || isNaN(height)) {
        alert('Harap masukkan angka yang valid.');
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menampilkan hasil
    let resultText = `<br>Jenis Kelamin: ${gender}<br>`;
    resultText += `BMI Anda: ${bmi.toFixed(2)}<br>`;

    // Menambahkan interpretasi BMI
    if (bmi < 18.5) {
        resultText += 'Kategori: Kurus';
    } else if (bmi < 24.9) {
        resultText += 'Kategori: Normal';
    } else if (bmi < 29.9) {
        resultText += 'Kategori: Kelebihan Berat Badan';
    } else {
        resultText += 'Kategori: Obesitas';
    }

    document.getElementById('result').innerHTML = resultText;
});
