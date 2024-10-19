$(document).ready(function() {
    $('#nameModal').modal('show');

    $('#greetingMessage').click(function() {
        const name = $('#nameInput').val().trim();
        if (!name) {
            $('#nameModal').modal('show');
        } else {
            $('#loveModal').modal('show');
        }
    });

    // Create falling flowers
    const flowerContainer = $('.falling-flowers');
    for (let i = 0; i < 20; i++) {
        const flower = $('<div class="flower">🌸</div>');
        const startPos = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        flower.css({
            left: `${startPos}%`,
            animationDuration: `${duration}s`
        });
        flowerContainer.append(flower);
    }
});

function submitName() {
    const name = $('#nameInput').val().trim();

    if (!name) {
        alert('Vui lòng nhập tên của bạn!');
        return;
    }

    $('#nameModal').modal('hide');

    let message;
    let animationContent;

    if (name.toLowerCase() === 'nghi') {
        message = `Chúc mừng Ngày Phụ Nữ Việt Nam 20/10 🎉<br>` + 
                  `pé Cuni của anh 😍.<br>` + 
                  `Chúc pé iu một ngày hạnh phúc và dui dẻ bên gia đình 😘<br>` +
                  `Mãi yêu cục dàng của anh ❤️`;
        animationContent = '<img src="https://i.makeagif.com/media/1-24-2024/zr6UDW.gif" alt="Kiss Animation" class="img-fluid" style="width: 100%; max-width: 500px;">';
    } else if (name.toLowerCase() === 'liên') {
        message = `Chúc mừng Ngày Phụ Nữ Việt Nam 20/10 🎉<br>` +
                  `chúc mẹ yêu tận hưởng ngày này, luôn tươi cười hạnh phúc nhé<br>` +
                  `Con trai yêu mẹ nhiều lắm 😍`;
        animationContent = '<img src="https://www.icegif.com/wp-content/uploads/icegif-4803.gif" alt="Gift Animation" class="img-fluid" style="width: 100%; max-width: 500px;">';
    } else {
        message = `Chúc mừng Ngày Phụ Nữ Việt Nam 20/10 🎉, ${name}!`;
        animationContent = '<i class="fas fa-heart fa-5x" style="color: red; width: 100%; max-width: 500px;"></i>';
    }

    $('#greetingMessage').html(message);
    $('#loveModal .modal-body').html(animationContent);
}

function typeWriter(text, elementSelector) {
    const element = $(elementSelector);
    element.html('');
    let i = 0;
    const speed = 100; // Tốc độ hiển thị từng chữ (ms)

    function type() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}



