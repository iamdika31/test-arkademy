function is_name_valid(name){
    console.log(/^[A-Z]{3,}$/.test(name));
}
function is_age_valid(age){
    console.log(/^[0-9]{2}$/.test(age))
}
function is_username_valid(username){
    console.log(/^[a-z]{4}_[0-9]{3}$/.test(username))
}
console.log("CHECK IS NAME VALID")
is_name_valid('TIARA')
is_name_valid('TIARa')
is_name_valid('TIara')
is_name_valid('ti')
console.log("CHECK IS AGE VALID")
is_age_valid(21)
is_age_valid(211)
is_age_valid('ar')
console.log("CHECK IS USERNAME VALID")
is_username_valid("yani_333")
is_username_valid("dian.11")
