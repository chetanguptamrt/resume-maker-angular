function resumeDownload(i){
    const invoice = this.document.getElementById("resume"+i);
    var opt = {
        margin: 0.4,
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: .98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice).set(opt).save(); 
}