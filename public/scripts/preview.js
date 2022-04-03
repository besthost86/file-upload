const filePicker = document.getElementById('file-picker');
const previewElement = document.getElementById('preview');

function onFilePick() {
    if (filePicker.files) {

        const pickedFile = filePicker.files[0];
        previewElement.src = URL.createObjectURL(pickedFile);
        previewElement.style.display = 'block';
    }
}

filePicker.addEventListener('change', onFilePick);