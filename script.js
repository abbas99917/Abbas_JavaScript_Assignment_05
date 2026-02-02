// ============================== Step 2: Employee Login System ===============================

// Variable
let isPasswordCorrect = true;   // change to false to test incorrect password

// Check login using if / else
if (isPasswordCorrect) {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}
// Observation in comments
// isPasswordCorrect = true  → Login Successful
// isPasswordCorrect = false → Incorrect Password


// =============================== Step 3: Online Order Approval    ===============================

// Variable
let isPaymentDone = true;   // change to false to test rejection

// Check order approval using if / else
if (isPaymentDone) {
    console.log("Order Approved");
} else {
    console.log("Order Rejected");
}

// Observation in comments
// isPaymentDone = true  → Order Approved
// isPaymentDone = false → Order Rejected


// ============================== Step 4: Student Result System ===============================

// Variable
let marks = 65;   // change value to test pass/fail

// Check result using if / else
if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Observation in comments
// marks >= 50 → Pass
// marks < 50  → Fail


// =============================== Step 5: Office Attendance Check ===============================

// Variable
let isOnTime = true;   // change to false to test Late/Absent

// Check attendance using if / else
if (isOnTime) {
    console.log("Present");
} else {
    console.log("Late / Absent");
}

// Observation in comments
// isOnTime = true  → Present
// isOnTime = false → Late / Absent


// =============================== Step 6: Discount Eligibility ===============================

// Variable
let isPremiumUser = true;   // change to false to test no discount

// Check discount eligibility using if / else
if (isPremiumUser) {
    console.log("Discount Applied");
} else {
    console.log("No Discount Available");
}

// Observation in comments
// isPremiumUser = true  → Discount Applied
// isPremiumUser = false → No Discount Available


// =============================== Step 7: Multiple Conditions (else if) ===============================

// Variable
let performanceScore = 85;  // change value to test different ratings

// Check performance rating
if (performanceScore >= 90) {
    console.log("Rating: Excellent");
} else if (performanceScore >= 70) {
    console.log("Rating: Good");
} else if (performanceScore >= 50) {
    console.log("Rating: Average");
} else {
    console.log("Rating: Poor");
}

// Observations in comments
// score >= 90 → Excellent
// 70 <= score < 90 → Good
// 50 <= score < 70 → Average
// score < 50 → Poor



