package main

import (
	"fmt"
	s "strings"

)

func array() {
	arr := []string{"Ramesh", "Raju", "Vicky"}
	arr = append(arr, "Rahul")
	fmt.Printf("%v\n", arr)
	for i := 0; i < len(arr); i++ {
		println(arr[i])
	}
	for index, item := range arr {
		fmt.Printf("numbers[%d] = %v\n", index, item)
	}
	var word = "original"
	copyword := s.Clone(word)
	fmt.Printf("%v is the copy of %v\n", copyword, word)
}

func makingConsts(){
	defer fmt.Println("first")
	defer fmt.Println("second")
	defer fmt.Println("third")
}

// main as entry point
func main() {
	var name = "pranav"
	var lastname string
	//colons is also used to declare a variable but no constants
	constantvariableonly := 22
	fmt.Printf("hello %v with Go\n", name)
	fmt.Printf("My name is %v and I am %v years old\n", name, constantvariableonly)
	fmt.Print("My Last name is: ")
	fmt.Scan(&lastname)
	fmt.Printf("my Full Name is %v %v\n", name, lastname)
	array()
	makingConsts()
}
