import re

with open('src/Portfolio.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

reps = {
    '#0f0a1e': '#fdf2f8',  # root bg -> soft fairy pink
    '#f5f0ff': '#831843',  # root text -> deep magenta
    'rgba(15,10,30,0.85)': 'rgba(253,242,248,0.85)', # nav bg
    'rgba(196,181,253,0.12)': 'rgba(244,114,182,0.3)', # borders
    '#c4b5fd': '#be185d',  # accents
    'rgba(245,240,255,0.55)': 'rgba(131,24,67,0.65)', # muted text
    'rgba(124,58,237,0.18)': 'rgba(244,114,182,0.3)', # glows
    'linear-gradient(135deg, #f5f0ff 0%, #c4b5fd 100%)': 'linear-gradient(135deg, #db2777 0%, #9d174d 100%)', # hero title
    'rgba(245,240,255,0.65)': 'rgba(131,24,67,0.8)',
    '#ff7f6b': '#f43f5e', # cursor
    'rgba(245,240,255,0.6)': 'rgba(131,24,67,0.75)',
    'linear-gradient(135deg, #7c3aed, #c4b5fd)': 'linear-gradient(135deg, #db2777, #f472b6)', # primary button
    'linear-gradient(90deg, #7c3aed, #c4b5fd)': 'linear-gradient(90deg, #db2777, #f472b6)', # divider
    'color: "#0f0a1e"': 'color: "#ffffff"', # primary button text
    'rgba(196,181,253,0.5)': 'rgba(190,24,93,0.5)', # outline button border
    'rgba(245,240,255,0.7)': 'rgba(131,24,67,0.85)',
    'rgba(196,181,253,0.06)': 'rgba(244,114,182,0.1)',
    'rgba(245,240,255,0.5)': 'rgba(131,24,67,0.6)',
    'rgba(196,181,253,0.04)': 'rgba(244,114,182,0.08)',
    'rgba(196,181,253,0.1)': 'rgba(244,114,182,0.25)',
    '#7c3aed': '#db2777', # dark accent
    'rgba(245,240,255,0.07)': 'rgba(244,114,182,0.15)',
    'rgba(196,181,253,0.2)': 'rgba(244,114,182,0.4)',
    '#ddd6fe': '#9d174d',
    'rgba(245,240,255,0.35)': 'rgba(131,24,67,0.5)',
    '#3b2068': '#f472b6', # scrollbar thumb
    'rgba(15,10,30,0.97)': 'rgba(253,242,248,0.97)', # mobile menu
    'rgba(196,181,253,0.07)': 'rgba(244,114,182,0.15)',
    'rgba(196,181,253,0.02)': 'rgba(244,114,182,0.05)',
    'rgba(196,181,253,0.25)': 'rgba(244,114,182,0.4)',
    'rgba(124,58,237,0.1)': 'rgba(244,114,182,0.15)',
    'rgba(196,181,253,${d.alpha})': 'rgba(244,114,182,${d.alpha})',
    '#f9a8d4': '#be185d',
    '#ec4899': '#f43f5e',
}

for old, new in reps.items():
    content = content.replace(old, new)

with open('src/Portfolio.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Colors updated")
