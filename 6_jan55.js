// let first_name="shashi"
// let middle_name="bhan"
// let last_name="maurya"
// let complete_name=first_name+" "+middle_name+" "+last_name
// console.log(complete_name)

//  let first_name="shashibhan"
//  let mob_num=20202002
//  console.log(first_name+" "+mob_num)
//  console.log(typeof(mob_num))
//  console.log(typeof(first_name))

// Type Conversion and Type casting.

// let my_num=8889
// let res=parseFloat(my_num)
// console.log(res)
// console.log(typeof(res))
// console.log(typeof(my_num))


// let data=Number("10")
// console.log(data)
// console.log(typeof(data))

// console.log("----Multiline string---")

// let intro=`this is the commaonnnhgd 
// hdgdgdhdj ggdgdnd hdhj`
// console.log(intro)


// 1. --------------------------------------MetaCharacter

// 1. '.' : Matches any chatacter with('.')

// let regex = /at..b/;
// console.log(regex.test(`atojb`))

// 2. (\d) : Matches any digit 0-9

// let regex = /\d+/
// console.log(regex.test(`1234`))
// console.log('abc123'.match(regex))

// let data = "how are u 122hii 9009hello"
// let regex = /\d+/g
// console.log(data.match(regex))

// 3. (\D) : Matches any non-digit 0-9

// let data = "how are u 122hii 9009hello"
// let regex = /\D+/g
// console.log(data.match(regex))

// 4. (\w) : Matches any word Character
// let data = "how are u 122hii 9009hello"
// let regex = /\w+/g
// console.log(data.match(regex))

// 5. (\W) : Matches any word Character
// let data = "how are u 122hii 9009hello"
// let regex = /\W+/g
// console.log(data.match(regex))

// 6. (\s) : Matches any Whitespace (space tab newline)
// let data = "how are u 122hii 9009hello"
// let regex = /\s+/g
// console.log(data.match(regex))


// 7. (\S) : Matches any Non- Whitespace (space tab newline)
// let data = "how are u 122hii 9009hello"
// let regex = /\S+/g
// console.log(data.match(regex))

// 8. (\b) : word boundary (match position start or end of word)
// let regex = /\bshashibhan\b/
// console.log(regex.test(` hello shashibhan hii`))

// 9. (\B) : non-word boundary (match position start or end of word)
// let regex = /\Bshashibhan\B/
// console.log(regex.test(` hello shashibhan hii`))

// 10.(^) : Matches the starting of string
// let reg = /^a/
// console.log(reg.test("are you busy"))

// 11.($) : Matches the ending of string
// let reg = /sy$/
// console.log(reg.test("are you busy"))

// 12.(|): Alternate (or)

// let reg = /good|bad/
// console.log(reg.test("I am very bad "))
// console.log(reg.test("I am very good pata nahi"))

// 13.(|) : Grouping.

// let reg = /(good|bad)/
// console.log(reg.test("I am very bad "))
// console.log(reg.test("I am very good pata nahi"))


// 14. (+) : matches one or more of the preceding character

// let reg = /to+/
// console.log(reg.test('to'))
// console.log(reg.test('tooo'))
// console.log(reg.test('tooooo'))

// 15. (\):find the Escape special character.
let reg = /\@/
console.log(reg.test("abc"))
console.log(reg.test("a@bc"))



