
"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const ITEMS = [
    { key:"iphone", label:"iPhone", price:39900, unit:"เครื่อง", emoji:"📱"},
    { key:"coffee", label:"กาแฟ", price:65, unit:"แก้ว", emoji:"☕"},
    { key:"gold", label:"ทองคำ", price:2650, unit:"กรัม", emoji:"🥇"},
    { key:"rice", label:"ข้าวสาร", price:700, unit:"กระสอบ", emoji:"🌾"},
];

export default function PurchasingPower() {
    const [price,setPrice]=useState<number>();
    const [saving,setSaving]=useState(3000);
    const [months,setMonths]=useState(12);

    useEffect(()=>{
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=thb")
            .then(r=>r.json())
            .then(d=>setPrice(d.bitcoin.thb))
            .catch(()=>{});
    },[]);

    const total=saving*months;
    const btc=useMemo(()=>price?total/price:0,[price,total]);

    return (
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#15080d] via-black to-[#120a0a] p-8">
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="relative z-10 flex items-center justify-between">
                <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">Purchasing Power</p>
                    <h2 className="font-line text-4xl font-black text-white">
                        เงินออมของคุณซื้ออะไรได้
                    </h2>
                </div>

                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                    <div className="flex items-center gap-2 text-xs text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
                        LIVE BTC
                    </div>
                    <div className="font-bold text-white">
                        {price ? `฿ ${price.toLocaleString()}` : "..."}
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-8 space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                    <div className="mb-3 flex justify-between">
                        <span className="text-zinc-400">Monthly Saving</span>
                        <span className="font-bold text-white">฿ {saving.toLocaleString()}</span>
                    </div>
                    <input className="w-full accent-pink-500" type="range" min="500" max="10000" step="500"
                           value={saving} onChange={e=>setSaving(Number(e.target.value))}/>
                </div>

                <div className="rounded-3xl  text-2xl text-zinc-400 font-lineborder border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                    <div className="mb-3 gap-2 flex">
                        <span>ระยะเวลา {months}</span>
                        <span>เดือน</span>
                    </div>
                    <input className="w-full accent-orange-500" type="range" min="1" max="60"
                           value={months} onChange={e=>setMonths(Number(e.target.value))}/>
                </div>

                <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
                    {ITEMS.map((i,index)=>{
                        const qty=total/i.price;
                        return (
                            <motion.div key={i.key}
                                        whileHover={{y:-8,scale:1.03}}
                                        className={index===0?
                                            "group relative rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl xl:row-span-2":
                                            "group relative rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"}>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
                                <div className="relative z-10">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 text-3xl">
                                        {i.emoji}
                                    </div>
                                    <div className="mt-6 font-['Orbitron'] text-5xl font-black bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                                        {qty.toFixed(qty>10?0:2)}
                                    </div>
                                    <div className="mt-2 text-white">{i.label}</div>
                                    <div className="text-sm text-zinc-500">{i.price.toLocaleString()} บาท / {i.unit}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="rounded-[30px] border border-orange-500/20 bg-gradient-to-r from-pink-500/10 to-orange-500/10 p-8 backdrop-blur-2xl">
                    <div className="grid gap-6 md:grid-cols-4">
                        <Metric title="เงินออมสะสม" value={`฿ ${total.toLocaleString()}`} />
                        <Metric title="BTC สะสม" value={`₿ ${btc.toFixed(6)}`} />
                        <Metric title="ราคา BTC" value={price?`฿ ${price.toLocaleString()}`:"-"} />
                        <Metric title="ออมเฉลี่ย/เดือน" value={`฿ ${saving.toLocaleString()}`} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Metric({title,value}:{title:string,value:string}){
    return(
        <div>
            <p className="text-zinc-400 text-sm">{title}</p>
            <h3 className="mt-2 font-['Orbitron'] text-2xl font-black text-white">{value}</h3>
        </div>
    );
}
