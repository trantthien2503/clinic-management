

# MÔI TRƯỜNG THỰC THI

[![py-image]][py-url]
[![django-image]][django-url]
[![vscode-image]][vscode-url]
[![db-image]][db-url]

Environments:

- [Python >3.9, <3.10][py-url]

Code-editor:

- [VSCode][vscode-url]

Dependencies:

- [Django <= 4.0.4][django-url]
- [Django-database (default: SQLite)][db-url]
- [django-filter==21.1][dj-filter-url]
- [shortuuid==1.0.9][suuid-url]

Deployment:

- [Heroku-site][heroku-url]
- [Heroku-CLI][heroku-cli-url]

Deployment dependecies:

- [whitenoise==6.0.0][wn-url]
- [gunicorn==20.1.0][gu-url]

# HƯỚNG DẪN CẤU HÌNH PROJECT TRÊN LOCAL PC

> Yêu cầu: đã cài đặt Python <3.10 / môi trường có hỗ trợ Python <3.10

pip install -r requirements.txt
```

Trong trường hợp không có ý định deploy trên Heroku thì chỉ cần cài đặt các thư viện Django, django-filter và shortuuid:

```terrminal
pip install django==4.0.4 django-filter==21.1 shortuuid==1.0.9
```

Sau khi cài đặt các gói cần thiết, chạy lệnh sau để khởi động server:

```terminal
python3 manage.py runserver
```

Nếu trên terminal hiện yêu cầu migrate thì ngắt server bằng lệnh Ctrl + C và thực hiện lệnh migrate sau đó khởi động server:

```terminal
python3 manage.py migrate
``
python3 manage.py runserver
```

Vào trình duyệt và mở localhost ở port :8000 là đã có thể thao tác với web trên localhost: [127.0.0.1](http://127.0.0.1:8000/)

# CURRENT STATUS

Đã hoàn thành các yêu cầu trong [Yêu cầu đồ án][ycda-url] gồm:

1. Lập danh sách khám bệnh
2. Lập phiếu khám bệnh
3. Tra cứu bệnh nhân
4. Lập hóa đơn thanh toán
5. Lập báo cáo tháng
6. Thay đổi qui định

Và các chức năng bổ sung:

- Trang chủ - Bảng tin
- Đăng nhập
- Danh sách bệnh nhân
