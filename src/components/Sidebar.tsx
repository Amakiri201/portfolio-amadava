import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <>
            <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                <div className="rotate-[-90deg] origin-center whitespace-nowrap text-[10px] font-medium text-brand-secondary tracking-widest uppercase">
                    Product designer
                </div>
            </div>
            <div className="fixed left-6 bottom-16 z-40 hidden lg:block">
                <div className="rotate-[-90deg] origin-center whitespace-nowrap text-[10px] font-medium text-brand-secondary tracking-widest uppercase">
                    2026
                </div>
            </div>
        </>
    );
};

export default Sidebar;
