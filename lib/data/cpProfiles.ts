export interface CPProfile {
    platform: string;
    username: string;
    url: string;
    rating: number | null;
    maxRating: number;
    rank: string;
    rankColor: string;
    platformColor: string;
    platformColorDark: string;
    icon: string;
    stats: { label: string; value: string }[];
    achievements: string[];
}

export const cpProfiles: CPProfile[] = [
    {
        platform: 'LeetCode',
        username: 'DinAce',
        url: 'https://leetcode.com/u/DinAce/',
        rating: 1928,
        maxRating: 3500,
        rank: 'Knight',
        rankColor: '#ffd700',
        platformColor: '#ffa116',
        platformColorDark: '#c47e00',
        icon: '⚔',
        stats: [
            { label: 'Rating', value: '1928' },
            { label: 'LC Solved', value: '700+' },
            { label: 'Global', value: 'Top 3%' },
        ],
        achievements: [
            'Peak rating 1928 — Knight',
            'Top 3% globally on LeetCode',
            '700+ LeetCode problems solved',
            '1500+ problems across all platforms',
        ],
    },
    {
        platform: 'Codeforces',
        username: 'DinAce',
        url: 'https://codeforces.com/profile/DinAce',
        rating: 1252,
        maxRating: 3500,
        rank: 'Pupil',
        rankColor: '#00ff88',
        platformColor: '#1da8f0',
        platformColorDark: '#0e6fa0',
        icon: '🔵',
        stats: [
            { label: 'Rating', value: '1252' },
            { label: 'Division', value: 'Div. 2' },
            { label: 'Rank', value: 'Pupil' },
        ],
        achievements: [
            'Pupil rated 1252',
            'Active in Div. 2 contests',
            'Strong algorithmic base',
        ],
    },
    {
        platform: 'CodeChef',
        username: 'dinace',
        url: 'https://www.codechef.com/users/dinace',
        rating: 1600,
        maxRating: 3000,
        rank: '3-Star',
        rankColor: '#ffd700',
        platformColor: '#f7a34b',
        platformColorDark: '#c07a22',
        icon: '⭐',
        stats: [
            { label: 'Rating', value: '1600+' },
            { label: 'Stars', value: '★★★' },
            { label: 'Rank', value: '3-Star' },
        ],
        achievements: [
            '3-Star with 1600+ rating',
            'Consistent long contest performer',
            'Top division participant',
        ],
    },
    {
        platform: 'AtCoder',
        username: 'dineshdumka874',
        url: 'https://atcoder.jp/users/dineshdumka874',
        rating: null,
        maxRating: 2800,
        rank: '7 Kyu',
        rankColor: '#00aab9',
        platformColor: '#00aab9',
        platformColorDark: '#007a85',
        icon: '🔷',
        stats: [
            { label: 'Rank', value: '7 Kyu' },
            { label: 'Focus', value: 'ABC/ARC' },
            { label: 'Status', value: 'Active' },
        ],
        achievements: [
            'Rated 7 Kyu on AtCoder',
            'Active in ABC / ARC rounds',
            'Strong math and logic base',
        ],
    },
    {
        platform: 'CSES',
        username: '243621',
        url: 'https://cses.fi/user/243621',
        rating: null,
        maxRating: 600,
        rank: 'Problem Set',
        rankColor: '#a78bfa',
        platformColor: '#a78bfa',
        platformColorDark: '#7c5cbf',
        icon: '📘',
        stats: [
            { label: 'Platform', value: 'CSES' },
            { label: 'Type', value: 'Problem Set' },
            { label: 'Status', value: 'Active' },
        ],
        achievements: [
            'Solving CSES Problem Set',
            'Covers classic CP topics',
            'Graph, DP, Trees & more',
        ],
    },
    {
        platform: 'GeeksForGeeks',
        username: 'unkno3z6z',
        url: 'https://www.geeksforgeeks.org/profile/unkno3z6z/',
        rating: null,
        maxRating: 100,
        rank: 'Coder',
        rankColor: '#2f8d46',
        platformColor: '#2f8d46',
        platformColorDark: '#1e5c2d',
        icon: '🌿',
        stats: [
            { label: 'Platform', value: 'GFG' },
            { label: 'Focus', value: 'DSA' },
            { label: 'Status', value: 'Active' },
        ],
        achievements: [
            'Active on GeeksForGeeks',
            'DSA interview prep',
            'Articles & problem solving',
        ],
    },
];

export const globalAchievements = [
    { icon: '⚔', label: 'LeetCode Knight (1928)' },
    { icon: '⚡', label: 'Top 3% on LeetCode' },
    { icon: '💻', label: '700+ LeetCode Problems Solved' },
    { icon: '📊', label: '1500+ Problems Across All Platforms' },
    { icon: '🔵', label: 'Codeforces Pupil' },
    { icon: '⭐', label: 'CodeChef 3-Star' },
    { icon: '🔷', label: 'AtCoder 7 Kyu' },
];
