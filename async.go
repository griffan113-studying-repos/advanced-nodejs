package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"time"
)

func request(start time.Time) {
	resp, err := http.Get("https://www.google.com")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	// Consume response body to ensure request is fully processed
	_, err = ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(time.Since(start).Milliseconds())
}

func main() {
	start := time.Now()

	for i := 0; i < 7; i++ {
		request(start)
	}
}
