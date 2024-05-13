import React from 'react';
const ELLIPSIS = '\u2026'; // Please use this in your solution and NOT '...' (three dots)

interface ChipListProps {
    chips?: { label: string }[];
    maxChips?: number;
    maxTextLength?: number;
}

interface ChipProps {
    label: string;
}


export const ChipList = ({ chips = [], maxChips, maxTextLength }: ChipListProps) => {
    // Implement your logic here:
    const displayedChips = chips.slice(0, maxChips);
    const hiddenChipsCount = chips.length - displayedChips.length;

    const truncLabel = (label: string) => {
        if(label.length <= maxTextLength) return label;
        if(maxTextLength < 1) return '';
        else return label.slice(0, maxTextLength) + "...";
    };

    return (
        <section style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {chips.length > 0 ? displayedChips.map((chip, index) => (
                <div
                    style={{
                        border: '1px solid #bbbbbb',
                        padding: '4px',
                        borderRadius: '8px',
                    }}
                    data-testid={`chip-${index}`} // use index of each item here
                    key={index}
                >
                    <div>
                        {truncLabel(chip.label)}
                    </div>
                </div>)) : <></>}
            {hiddenChipsCount >= 1 ?
                <aside data-testid="exceeding-text">{hiddenChipsCount} more items</aside>
                : null
            }
        </section>
    );
};

const sampleChips: ChipProps[] = [
    { label: '123456789' },
    { label: '123456' },
    { label: '1234567' },
    { label: '12345678' },
    { label: '12345' },
];

// used in the preview tab, don't remove this
//(you can add and change the parameters to test different cases)

export default function App() {
    return <ChipList maxChips={5} maxTextLength={4} chips={sampleChips} />;
    // return <ChipList maxChips={3} chips={sampleChips} />;
    // return <ChipList />;
    // return <ChipList maxTextLength={6} chips={sampleChips} />;
}
