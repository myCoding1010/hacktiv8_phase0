// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi 
// dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) 
// First Name, Last Name, Gender dan Birth Year. 
// Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
// Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

//     Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
//     John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }


function changeMe(arr) {
    // you can only write your code here!

    if (arr.length == 0) {
      console.log('" "')
    }

    for (i = 0; i < arr.length; i++) {
      
      var data = ((i + 1) + '. ' + arr[i][0].concat(' ' + arr[i][1]))
      // Nama Lengkap

      var today = new Date();
      var year = today.getFullYear()
      // get this year value

      var myData = {}
      myData.firstName = arr[i][0]
      // firstName
      myData.lastName = arr[i][1]
      // lastName
      myData.gender = arr[i][2]
      // gender
      
      if (arr[i][3] > year || arr[i][3] == undefined) {
          myData.age = 'Invalid Birth Year'
      } else {
          myData.age = year - arr[i][3]
      }

      console.log(data)
      console.log(myData)

    } 
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 

    // 1. Christ Evans:
    // { firstName: 'Christ',
    //   lastName: 'Evans',
    //   gender: 'Male',
    //   age: 36 }
    // 2. Robert Downey:
    // { firstName: 'Robert',
    //   lastName: 'Downey',
    //   gender: 'Male',
    //   age: 'Invalid Birth Year' }
changeMe([]); // ""