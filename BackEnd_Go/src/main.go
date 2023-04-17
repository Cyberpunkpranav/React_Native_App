package main

import (
	f "fmt"

	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func Database_Conn() {
	db, err := sql.Open("mysql", "root:MYSQLaccount123@tcp(localhost:3306)/material motors")
	if err != nil {
		panic(err)
	} else {
		f.Println("Database Connected")
	}
	defer db.Close()

	// Check the connection.
	err = db.Ping()
	if err != nil {
		panic(err)
	}
}

func main() {
	Database_Conn()
}

// insert,err:= db.Query("INSERT INTO `material motors`.`new_user`(firstname,lastname,phone,emailid) VALUES('Pranav','Sharma','7339023531','pranavsharma733902@gmail.com');")
// if err != nil{
// 	panic(err.Error())
// }
// defer insert.Close()
// fmt.Println("Connected to the MySQL database!")
