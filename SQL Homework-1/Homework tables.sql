CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    enrolled_date DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    national_id_number VARCHAR(20) NOT NULL UNIQUE,
    student_card_name VARCHAR(100) NOT NULL
);
CREATE TABLE teachers (
    teacher_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    academic_rank VARCHAR(50) NOT NULL,
    hire_date DATE NOT NULL
);
CREATE TABLE grade_details (
    grade_detail_id SERIAL PRIMARY KEY,
    grade_id INT NOT NULL,
    achievement_type VARCHAR(50) NOT NULL,
    achievement_points INT NOT NULL,
    achievement_max_points INT NOT NULL,
    achievement_date DATE NOT NULL
);
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(150) NOT NULL,
    credits INT NOT NULL,
    academic_year INT NOT NULL,
    semester VARCHAR(50) NOT NULL
);
CREATE TABLE grades (
    grade_id SERIAL PRIMARY KEY,
    student_id INT NOT NULL REFERENCES students(student_id),
    course_id INT NOT NULL REFERENCES courses(course_id),
    teacher_id INT NOT NULL REFERENCES teachers(teacher_id),
    grade VARCHAR(10) NOT NULL,
    comment TEXT,
    created_date DATE NOT NULL
);
CREATE TABLE achievement_types (
    achievement_type_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    participation_rate DECIMAL(5, 2) NOT NULL
);