/**
 * List of known big football events.
 * Used by another script
 */
function getEvents() {
    return [
		// Test Events
		["2024-05-30", "20:00", "Test", , "2024-06-02", "20:00"],
        // Women's club events
        ["2024-09-21", "", "start of the WSL season"],
        ["2023-11-19", "", "Women's first Manchester Derby of the season"],
        ["2024-03-23", "", "Women's second Manchester Derby of the season"],
        ["2025-05-11", "14:00", "final day of the WSL season"],
        ["2024-03-31", "15:00", "Women's League Cup final"],
        ["2024-05-12", "14:30", "Women's FA Cup final"],
        ["2024-05-25", "17:00", "Women's Champions League Final"],

        // Mens club events 
        ["2023-08-10", "TBC","Men's FA Community Shield"],
        ["2024-06-18", "09:00", "Premier League release next season's fixtures", "https://www.premierleague.com/fixtures"],
        ["2024-08-17", "", "start of the Premier League season"],
        ["2023-10-29", "", "Men's first Manchester Derby of the season"],
        ["2024-03-03", "", "Men's second Manchester Derby of the season"],
        ["2024-05-19", "16:00", "final day of the Premier League season"],
        ["2024-05-25", "15:00", "Men's FA Cup final"],
        ["2024-05-26", "15:00", "[Championship] Promotion playoff Final"],
        ["2024-06-01", "20:00",	"Men's Champion's League final", "https://www.google.com/search?q=champions+league+fixtures&source=hp&ei=LToTY572JZeigAa4vaewBA&iflsig=AJiK0e8AAAAAYxNIPYzcPJdRlDfU7DbkY_f0x5RY_nSu&ved=0ahUKEwjewOqTwvj5AhUXEcAKHbjeCUYQ4dUDCAk&uact=5&oq=champions+league+fixtures&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQ_QEyCwgAEIAEELEDEIMBMggIABCABBCxAzIFCAAQgAQyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQ6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxCDAToLCC4QsQMQgwEQ1AI6DgguEIAEELEDEMcBEK8BOgUILhCABDoLCC4QgAQQsQMQ1AI6CAguEIAEELEDOggIABCxAxCDAToLCC4QgAQQxwEQrwE6EQguEIAEELEDEIMBEMcBEK8BOggILhCxAxCDAVAAWPUiYKMjaABwAHgAgAF4iAGiDZIBBDIzLjGYAQCgAQE&sclient=gws-wiz#sie=m;/g/11vwf2rnkr;2;/m/0c1q0;dt;fp;1;;;"],

        // England Events
        ["2024-06-14", "20:00", "Euro 2024 Group Stages", "https://www.google.com/search?q=euro+2024+fixtures&safe=active&sxsrf=APwXEdeFFDpPa2VYMydyJwBJmAwDH0rlxw%3A1687193344825&source=hp&ei=AIeQZID_L46HhbIP-PeH-AQ&iflsig=AOEireoAAAAAZJCVEBIhUGWciZedN8lGQOKC6MbdEp_v&ved=0ahUKEwiA_-7_5M__AhWOQ0EAHfj7AU8Q4dUDCAs&uact=5&oq=euro+2024+fixtures&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQ_QEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEIoFECc6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QigUQsQMQgwEQ1AI6DgguEIAEELEDEIMBENQCOg4ILhCDARDUAhCxAxCABDoICAAQgAQQsQM6CwguEIAEELEDENQCOgsILhCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgARQAFjcG2DcHGgAcAB4AIABVIgBmAqSAQIxOJgBAKABAQ&sclient=gws-wiz", "2024-06-26", "20:00"],
		["2024-06-16", "20:00", "Euro 2024 England Fixtures", "https://y2geek.me/mens-football/england-euro-2024-fixtures-and-scores/", "2024-06-25", "20:00"],
		["2024-06-29", "17:00", "Euro 2024 Round of 16", "https://www.google.com/search?q=euro+2024+fixtures&safe=active&sxsrf=APwXEdeFFDpPa2VYMydyJwBJmAwDH0rlxw%3A1687193344825&source=hp&ei=AIeQZID_L46HhbIP-PeH-AQ&iflsig=AOEireoAAAAAZJCVEBIhUGWciZedN8lGQOKC6MbdEp_v&ved=0ahUKEwiA_-7_5M__AhWOQ0EAHfj7AU8Q4dUDCAs&uact=5&oq=euro+2024+fixtures&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQ_QEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEIoFECc6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QigUQsQMQgwEQ1AI6DgguEIAEELEDEIMBENQCOg4ILhCDARDUAhCxAxCABDoICAAQgAQQsQM6CwguEIAEELEDENQCOgsILhCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgARQAFjcG2DcHGgAcAB4AIABVIgBmAqSAQIxOJgBAKABAQ&sclient=gws-wiz", "2024-07-02", "20:00"],
        ["2024-07-06", "17:00", "Euro 2024 Quater-Final's", "https://www.google.com/search?q=euro+2024+fixtures&safe=active&sxsrf=APwXEdeFFDpPa2VYMydyJwBJmAwDH0rlxw%3A1687193344825&source=hp&ei=AIeQZID_L46HhbIP-PeH-AQ&iflsig=AOEireoAAAAAZJCVEBIhUGWciZedN8lGQOKC6MbdEp_v&ved=0ahUKEwiA_-7_5M__AhWOQ0EAHfj7AU8Q4dUDCAs&uact=5&oq=euro+2024+fixtures&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQ_QEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEIoFECc6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QigUQsQMQgwEQ1AI6DgguEIAEELEDEIMBENQCOg4ILhCDARDUAhCxAxCABDoICAAQgAQQsQM6CwguEIAEELEDENQCOgsILhCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgARQAFjcG2DcHGgAcAB4AIABVIgBmAqSAQIxOJgBAKABAQ&sclient=gws-wiz", "2024-07-06", "20:00"],
        ["2024-07-09", "20:00", "Euro 2024 Semi-Final's", "https://www.google.com/search?q=euro+2024+fixtures&safe=active&sxsrf=APwXEdeFFDpPa2VYMydyJwBJmAwDH0rlxw%3A1687193344825&source=hp&ei=AIeQZID_L46HhbIP-PeH-AQ&iflsig=AOEireoAAAAAZJCVEBIhUGWciZedN8lGQOKC6MbdEp_v&ved=0ahUKEwiA_-7_5M__AhWOQ0EAHfj7AU8Q4dUDCAs&uact=5&oq=euro+2024+fixtures&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQ_QEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEIoFECc6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QigUQsQMQgwEQ1AI6DgguEIAEELEDEIMBENQCOg4ILhCDARDUAhCxAxCABDoICAAQgAQQsQM6CwguEIAEELEDENQCOgsILhCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgARQAFjcG2DcHGgAcAB4AIABVIgBmAqSAQIxOJgBAKABAQ&sclient=gws-wiz", "2024-07-10", "20:00"],
        ["2024-07-14", "20:00", "Euro 2024 Final", "https://www.google.com/search?q=euro+2024+fixtures&safe=active&sxsrf=APwXEdeFFDpPa2VYMydyJwBJmAwDH0rlxw%3A1687193344825&source=hp&ei=AIeQZID_L46HhbIP-PeH-AQ&iflsig=AOEireoAAAAAZJCVEBIhUGWciZedN8lGQOKC6MbdEp_v&ved=0ahUKEwiA_-7_5M__AhWOQ0EAHfj7AU8Q4dUDCAs&uact=5&oq=euro+2024+fixtures&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQ_QEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEIoFECc6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QigUQsQMQgwEQ1AI6DgguEIAEELEDEIMBENQCOg4ILhCDARDUAhCxAxCABDoICAAQgAQQsQM6CwguEIAEELEDENQCOgsILhCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgARQAFjcG2DcHGgAcAB4AIABVIgBmAqSAQIxOJgBAKABAQ&sclient=gws-wiz#sie=m;/g/11vlsvmgm6;2;/m/01l10v;dt;fp;1;;;"],
        ["2025-07-02", "", "Start of Euro 2025"],
        ["2025-07-16", "", "Start of Euro 2025 Quater-Final's"],
        ["2025-07-22", "", "Start of Euro 2025 Semi-Final's"],
        ["2025-07-27", "", "Euro 2025 Final"]
    ]
}