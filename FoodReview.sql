create database FoodReview
go
use FoodReview
go

create table Users(
user_id int primary key IDENTITY(1,1) not null ,
lastname Nvarchar(50) not null,
firstname Nvarchar(50) not null,
email Nvarchar(50)not null,
password Nvarchar(50)not null,
birthday date null,
avatar Nvarchar(100) null,


);

CREATE TABLE Post (
  post_id INT PRIMARY KEY IDENTITY(1,1) not null,
  user_id INT NOT NULL,
  introduction Nvarchar(500),
  restaurant Nvarchar(500) NULL,
  image_url Nvarchar(500) null,
  rating DECIMAL(2, 1) NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
);

CREATE TABLE Comments (
  id INT PRIMARY KEY IDENTITY(1,1),
  user_id int,
  post_id INT,
  comment_text NVARCHAR(MAX)
  FOREIGN KEY (post_id) REFERENCES Post(post_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
);

CREATE TABLE Ratings (
  id INT PRIMARY KEY IDENTITY(1,1),
  user_id int,
  post_id INT,
  rating INT,
  FOREIGN KEY (post_id) REFERENCES Post(post_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
);



-- Thêm một users mới
INSERT INTO Users(lastname,firstname,email,password,birthday,avatar) VALUES (N'Nguyen',N'Van A', 'Anha@gmail.com','123456789',null,'anhacute.png');
INSERT INTO Users(lastname,firstname,email,password,birthday,avatar) VALUES (N'Nguyen',N'Van B', 'AnhB@gmail.com','123456789',null,'anhacuteb.png');



-- Thêm một bài post mới
INSERT INTO Post(user_id,introduction,restaurant,image_url,rating) VALUES (1,N'Hôm nay mình sẽ dẫn các bạn đến với Hải Sản Hòn Thơm',N'6 Đ. Lê Trọng Tấn, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh 700000','honthom.png','5.0');
INSERT INTO Post(user_id,introduction,restaurant,image_url,rating) VALUES (2,N'Hôm nay mình sẽ dẫn các bạn đến với Hải Sản Hòn Thơm',N'6 Đ. Lê Trọng Tấn, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh 700000','honthom.png','5.0');

-- Thêm một bình luận mới cho bài viết có ID là 1
INSERT INTO Comments (user_id, post_id, comment_text)
VALUES (1, 1, N'đồ ăn ở đây ngon lắm mấy bạn hãy đến ăn');
INSERT INTO Comments (user_id, post_id, comment_text)
VALUES (2, 1, N'đồ ăn ở đây ngon lắm mấy bạn hãy đến ăn2');

-- Thêm một bình luận khác cho cùng một bài viết
INSERT INTO Comments (user_id, post_id, comment_text)
VALUES (1, 1, N'nói thật là rất ngon luôn ấy chứ');
INSERT INTO Comments (user_id, post_id, comment_text)
VALUES (2, 1, N'nói thật là rất ngon luôn ấy chứ2');

-- Thêm đánh giá ban đầu cho bài viết
INSERT INTO Ratings (user_id, post_id, rating)
VALUES (1, 1, 4);
INSERT INTO Ratings (user_id, post_id, rating)
VALUES (2, 1, 5);

-- Cập nhật đánh giá cho bài viết
UPDATE Ratings SET rating = 5 WHERE post_id = 1;





select * from Users
select * from Post
-- Lấy tất cả các bình luận cho một bài viết cụ thể (ở đây, bài viết có ID là 1)
SELECT * FROM Comments WHERE post_id = 1;
-- Lấy đánh giá hiện tại cho một bài viết cụ thể
SELECT * FROM Ratings WHERE post_id = 1;



SELECT Comments.comment_text, Ratings.rating FROM Comments INNER JOIN Ratings ON Comments.post_id = Ratings.post_id inner join Users on Comments.user_id = Users.user_id  ;