let hash = {}; //hey - plant, value - how to take care

function Add() {
    AddValue(prompt("plant: "), prompt("how to take care: "));
}

function DeleteB() {
    DeleteValue(prompt("plant: "));
}

function GetValue() {
    alert(GetValueInfo(prompt("plant: ")));
}

function allval() {
    let info = ListValues();
    alert(info);
    console.log(info);
}

function AddValue(key, value) {
    if (key in hash) {
        alert("Value is already here: " + key);
        return;
    }

    console.log(key, value);
    hash[key] = value;
    return;
}

function DeleteValue(key) {
    delete hash[key];
}

function GetValueInfo(key) {
    if (key in hash) {
        return "key: " + key + ", value: " + hash[key]; 
    } else {
        return "No info";
    }
}

function ListValues() {
    let string = "";
    for (let key in hash) {
        string += "key: " + key + ", value: " + hash[key] + "\n";
    }
    return string;
}