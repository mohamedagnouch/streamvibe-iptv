'use client';

import { useState } from 'react';
import { X, Copy, Check, Trophy, Film, Globe, Zap, List } from 'lucide-react';

const channelData = [
    {
        category: 'Sports',
        icon: Trophy,
        channels: ['Sky Sports Main Event', 'BT Sport 1, 2, 3', 'DAZN Sports', 'beIN Sports 1-10', 'Eurosport 1 & 2', 'NBC Sports', 'ESPN & FOX Sports']
    },
    {
        category: 'Movies & Cinema',
        icon: Film,
        channels: ['Sky Cinema Premiere', 'HBO & Max', 'Netflix Channels', 'Disney+ Originals', 'Paramount Network', 'AMC', 'Showtime']
    },
    {
        category: 'Global Content',
        icon: Globe,
        channels: ['BBC One & Two (UK)', 'ABC & NBC (USA)', 'TF1 & Canal+ (FR)', 'ZDF & RTL (DE)', 'Antena 3 (ES)', 'RAI 1 (IT)', 'CCTV (CN)']
    }
];

interface ChannelCopyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ChannelCopyModal({ isOpen, onClose }: ChannelCopyModalProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const allChannels = channelData.flatMap(cat => [`--- ${cat.category} ---`, ...cat.channels, '']).join('\n');
        navigator.clipboard.writeText(allChannels).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-[#0a0e1a] border border-white/10 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-gradient-to-r from-orange-500/5 to-pink-500/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl flex items-center justify-center">
                            <List className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Premium Channel List</h3>
                            <p className="text-xs text-gray-400">Preview our 19,000+ channel library</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Channels List */}
                <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <div className="space-y-6">
                        {channelData.map((section, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-2 mb-3 text-sm font-bold text-orange-400 uppercase tracking-wider">
                                    <section.icon className="w-4 h-4" />
                                    {section.category}
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    {section.channels.map((chan, cIdx) => (
                                        <div key={cIdx} className="flex items-center gap-2 text-gray-300 text-sm py-1 border-b border-white/5">
                                            <Zap className="w-3 h-3 text-orange-500/50" />
                                            {chan}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5 bg-white/5">
                    <button
                        onClick={copyToClipboard}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-orange-500/40 transition-all group active:scale-[0.98]"
                    >
                        {copied ? (
                            <>
                                <Check className="w-5 h-5" />
                                Copied to Clipboard!
                            </>
                        ) : (
                            <>
                                <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Copy Full Channels List
                            </>
                        )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                        Total 19,000+ live channels & 96,000+ VOD available upon subscription.
                    </p>
                </div>
            </div>
        </div>
    );
}
