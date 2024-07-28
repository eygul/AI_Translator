import React from "react";

export default function Tabs({ activeTab, onTabChange }){
    return (
        <div role="tablist" className="tabs tabs-bordered">
            <a 
                role="tab" 
                className={`tab ${activeTab === "translation_en_to_de" ? "tab-active" : ""}`} 
                onClick={() => onTabChange("translation_en_to_de")}
            >
                German
            </a>
            <a 
                role="tab" 
                className={`tab ${activeTab === "translation_en_to_fr" ? "tab-active" : ""}`} 
                onClick={() => onTabChange("translation_en_to_fr")}
            >
                French
            </a>
            <a 
                role="tab" 
                className={`tab ${activeTab === "translation_en_to_ro" ? "tab-active" : ""}`} 
                onClick={() => onTabChange("translation_en_to_ro")}
            >
                Romanian
            </a>
        </div>
    );
}