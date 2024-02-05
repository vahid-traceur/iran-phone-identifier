const numRegex = [{
    op: 'mci',
    rgx: /09((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96))\d{0,3}/g
}, {
    op: 'mtn',
    rgx: /09((32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41))\d{0,3}/g
}, {
    op: 'rightel',
    rgx: /09((20)|(21)|(22)|(23))\d{0,3}/g,
}]

function check(phone) {
    numRegex.forEach(item => {
        if (phone.match(item.rgx))
            console.log('test: ', item.op)
    })
}

check('0921')