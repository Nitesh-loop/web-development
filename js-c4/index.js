// objects - store data in-depth - composite / complex data type
// key-valye pairs (for remembering)


let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Nick Saga",
    length: 50,
    level: 2,
    isfree: true,
    tags: ["html","CSS"]
}

console.log(course.tags)

console.log(course["tags"])     //bracket notation, just to rember: give you the same result as course.tags


let airbnb = {
    isOpen: false,
    castleName: "Nick's Castle",
    availableRooms: 10,
    roomType: ["noraml", "delux", "villa"]
} 



