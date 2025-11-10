'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChannelLogos from '../components/ChannelLogos';
import { ShieldCheck, Search } from 'lucide-react';
import { navigateToPricing } from '../utils/navigation';

const countries = [
  { 
    name: 'United States', 
    code: 'us', 
    channelCount: 14298, 
    status: 'Available',
    channels: [
      // News Channels
      { id: 1, name: 'CNN', icon: 'CNN', category: 'News', status: 'Active' },
      { id: 2, name: 'Fox News', icon: 'FOX', category: 'News', status: 'Active' },
      { id: 3, name: 'MSNBC', icon: 'MSNBC', category: 'News', status: 'Active' },
      { id: 4, name: 'ABC News', icon: 'ABC', category: 'News', status: 'Active' },
      { id: 5, name: 'CBS News', icon: 'CBS', category: 'News', status: 'Active' },
      { id: 6, name: 'NBC News', icon: 'NBC', category: 'News', status: 'Active' },
      { id: 7, name: 'Bloomberg', icon: 'BLMB', category: 'Business', status: 'Active' },
      { id: 8, name: 'CNBC', icon: 'CNBC', category: 'Business', status: 'Active' },
      { id: 9, name: 'Fox Business', icon: 'FBN', category: 'Business', status: 'Active' },
      { id: 10, name: 'NewsNation', icon: 'NN', category: 'News', status: 'Active' },
      
      // Sports Channels
      { id: 11, name: 'ESPN', icon: 'ESPN', category: 'Sports', status: 'Active' },
      { id: 12, name: 'ESPN2', icon: 'ESPN2', category: 'Sports', status: 'Active' },
      { id: 13, name: 'ESPN U', icon: 'ESPNU', category: 'Sports', status: 'Active' },
      { id: 14, name: 'Fox Sports 1', icon: 'FS1', category: 'Sports', status: 'Active' },
      { id: 15, name: 'Fox Sports 2', icon: 'FS2', category: 'Sports', status: 'Active' },
      { id: 16, name: 'NBC Sports', icon: 'NBCS', category: 'Sports', status: 'Active' },
      { id: 17, name: 'CBS Sports', icon: 'CBSS', category: 'Sports', status: 'Active' },
      { id: 18, name: 'NFL Network', icon: 'NFL', category: 'Sports', status: 'Active' },
      { id: 19, name: 'NBA TV', icon: 'NBA', category: 'Sports', status: 'Active' },
      { id: 20, name: 'MLB Network', icon: 'MLB', category: 'Sports', status: 'Active' },
      { id: 21, name: 'NHL Network', icon: 'NHL', category: 'Sports', status: 'Active' },
      { id: 22, name: 'Golf Channel', icon: 'GOLF', category: 'Sports', status: 'Active' },
      { id: 23, name: 'Tennis Channel', icon: 'TC', category: 'Sports', status: 'Active' },
      { id: 24, name: 'beIN Sports', icon: 'BEIN', category: 'Sports', status: 'Active' },
      { id: 25, name: 'Stadium', icon: 'STAD', category: 'Sports', status: 'Active' },
      
      // Entertainment
      { id: 26, name: 'HBO', icon: 'HBO', category: 'Entertainment', status: 'Active' },
      { id: 27, name: 'Showtime', icon: 'SHO', category: 'Entertainment', status: 'Active' },
      { id: 28, name: 'Starz', icon: 'STRZ', category: 'Entertainment', status: 'Active' },
      { id: 29, name: 'Cinemax', icon: 'MAX', category: 'Entertainment', status: 'Active' },
      { id: 30, name: 'AMC', icon: 'AMC', category: 'Entertainment', status: 'Active' },
      { id: 31, name: 'FX', icon: 'FX', category: 'Entertainment', status: 'Active' },
      { id: 32, name: 'FXX', icon: 'FXX', category: 'Entertainment', status: 'Active' },
      { id: 33, name: 'TNT', icon: 'TNT', category: 'Entertainment', status: 'Active' },
      { id: 34, name: 'TBS', icon: 'TBS', category: 'Entertainment', status: 'Active' },
      { id: 35, name: 'USA Network', icon: 'USA', category: 'Entertainment', status: 'Active' },
      { id: 36, name: 'Syfy', icon: 'SYFY', category: 'Sci-Fi', status: 'Active' },
      { id: 37, name: 'Bravo', icon: 'BRVO', category: 'Entertainment', status: 'Active' },
      { id: 38, name: 'E!', icon: 'E!', category: 'Entertainment', status: 'Active' },
      { id: 39, name: 'Paramount Network', icon: 'PRMT', category: 'Entertainment', status: 'Active' },
      { id: 40, name: 'Comedy Central', icon: 'CC', category: 'Comedy', status: 'Active' },
      
      // Kids & Family
      { id: 41, name: 'Disney Channel', icon: 'DISN', category: 'Kids', status: 'Active' },
      { id: 42, name: 'Disney Junior', icon: 'DISJ', category: 'Kids', status: 'Active' },
      { id: 43, name: 'Disney XD', icon: 'DISX', category: 'Kids', status: 'Active' },
      { id: 44, name: 'Nickelodeon', icon: 'NICK', category: 'Kids', status: 'Active' },
      { id: 45, name: 'Nick Jr', icon: 'NJJR', category: 'Kids', status: 'Active' },
      { id: 46, name: 'Cartoon Network', icon: 'CN', category: 'Kids', status: 'Active' },
      { id: 47, name: 'Boomerang', icon: 'BOOM', category: 'Kids', status: 'Active' },
      { id: 48, name: 'PBS Kids', icon: 'PBSK', category: 'Kids', status: 'Active' },
      { id: 49, name: 'Universal Kids', icon: 'UNIV', category: 'Kids', status: 'Active' },
      { id: 50, name: 'Baby TV', icon: 'BABY', category: 'Kids', status: 'Active' },
      
      // Documentary & Educational
      { id: 51, name: 'National Geographic', icon: 'NGC', category: 'Documentary', status: 'Active' },
      { id: 52, name: 'Nat Geo Wild', icon: 'NGW', category: 'Documentary', status: 'Active' },
      { id: 53, name: 'Discovery Channel', icon: 'DISC', category: 'Documentary', status: 'Active' },
      { id: 54, name: 'Animal Planet', icon: 'ANPL', category: 'Documentary', status: 'Active' },
      { id: 55, name: 'History Channel', icon: 'HIST', category: 'Documentary', status: 'Active' },
      { id: 56, name: 'History 2', icon: 'HIS2', category: 'Documentary', status: 'Active' },
      { id: 57, name: 'Science Channel', icon: 'SCI', category: 'Documentary', status: 'Active' },
      { id: 58, name: 'Smithsonian', icon: 'SMTH', category: 'Documentary', status: 'Active' },
      { id: 59, name: 'PBS', icon: 'PBS', category: 'Educational', status: 'Active' },
      { id: 60, name: 'BBC America', icon: 'BBCA', category: 'Documentary', status: 'Active' },
      
      // Lifestyle & Reality
      { id: 61, name: 'HGTV', icon: 'HGTV', category: 'Lifestyle', status: 'Active' },
      { id: 62, name: 'Food Network', icon: 'FOOD', category: 'Cooking', status: 'Active' },
      { id: 63, name: 'Cooking Channel', icon: 'COOK', category: 'Cooking', status: 'Active' },
      { id: 64, name: 'Travel Channel', icon: 'TRVL', category: 'Outdoor', status: 'Active' },
      { id: 65, name: 'TLC', icon: 'TLC', category: 'Lifestyle', status: 'Active' },
      { id: 66, name: 'Lifetime', icon: 'LIFE', category: 'Entertainment', status: 'Active' },
      { id: 67, name: 'Hallmark Channel', icon: 'HALL', category: 'Entertainment', status: 'Active' },
      { id: 68, name: 'OWN', icon: 'OWN', category: 'Lifestyle', status: 'Active' },
      { id: 69, name: 'WE tv', icon: 'WE', category: 'Entertainment', status: 'Active' },
      { id: 70, name: 'A&E', icon: 'A&E', category: 'Entertainment', status: 'Active' },
      
      // Music
      { id: 71, name: 'MTV', icon: 'MTV', category: 'Music', status: 'Active' },
      { id: 72, name: 'MTV2', icon: 'MTV2', category: 'Music', status: 'Active' },
      { id: 73, name: 'VH1', icon: 'VH1', category: 'Music', status: 'Active' },
      { id: 74, name: 'CMT', icon: 'CMT', category: 'Music', status: 'Active' },
      { id: 75, name: 'BET', icon: 'BET', category: 'Music', status: 'Active' },
      { id: 76, name: 'Fuse', icon: 'FUSE', category: 'Music', status: 'Active' },
      { id: 77, name: 'AXS TV', icon: 'AXS', category: 'Music', status: 'Active' },
      
      // Movies
      { id: 78, name: 'TCM', icon: 'TCM', category: 'Movies', status: 'Active' },
      { id: 79, name: 'IFC', icon: 'IFC', category: 'Movies', status: 'Active' },
      { id: 80, name: 'Sundance TV', icon: 'SUND', category: 'Movies', status: 'Active' },
      { id: 81, name: 'Freeform', icon: 'FREE', category: 'Movies', status: 'Active' },
      { id: 82, name: 'Hallmark Movies', icon: 'HMM', category: 'Movies', status: 'Active' },
      { id: 83, name: 'Lifetime Movies', icon: 'LMN', category: 'Movies', status: 'Active' },
      
      // Regional Sports Networks
      { id: 84, name: 'YES Network', icon: 'YES', category: 'Sports', status: 'Active' },
      { id: 85, name: 'MSG Network', icon: 'MSG', category: 'Sports', status: 'Active' },
      { id: 86, name: 'SNY', icon: 'SNY', category: 'Sports', status: 'Active' },
      { id: 87, name: 'NESN', icon: 'NESN', category: 'Sports', status: 'Active' },
      { id: 88, name: 'Bally Sports', icon: 'BALY', category: 'Sports', status: 'Active' },
      
      // International
      { id: 89, name: 'Univision', icon: 'UNI', category: 'Series', status: 'Active' },
      { id: 90, name: 'Telemundo', icon: 'TELE', category: 'Series', status: 'Active' },
      { id: 91, name: 'TV5 Monde', icon: 'TV5', category: 'Classic', status: 'Active' },
      { id: 92, name: 'RAI Italia', icon: 'RAI', category: 'Entertainment', status: 'Active' },
      
      // Weather & Outdoor
      { id: 93, name: 'Weather Channel', icon: 'TWC', category: 'Outdoor', status: 'Active' },
      { id: 94, name: 'Outdoor Channel', icon: 'OUT', category: 'Outdoor', status: 'Active' },
      { id: 95, name: 'Sportsman Channel', icon: 'SPRT', category: 'Outdoor', status: 'Active' },
      
      // Religious
      { id: 96, name: 'TBN', icon: 'TBN', category: 'Religious', status: 'Active' },
      { id: 97, name: 'Daystar', icon: 'DAY', category: 'Religious', status: 'Active' },
      { id: 98, name: 'EWTN', icon: 'EWTN', category: 'Religious', status: 'Active' },
      
      // Shopping
      { id: 99, name: 'QVC', icon: 'QVC', category: 'Entertainment', status: 'Active' },
      { id: 100, name: 'HSN', icon: 'HSN', category: 'Entertainment', status: 'Active' },
    ]
  },
  { 
    name: 'Canada', 
    code: 'ca', 
    channelCount: 1815, 
    status: 'Available',
    channels: [
      // General & News
      { id: 1, name: 'CBC', icon: 'CBC', category: 'General', status: 'Active' },
      { id: 2, name: 'CBC News Network', icon: 'CBCN', category: 'News', status: 'Active' },
      { id: 3, name: 'CTV', icon: 'CTV', category: 'General', status: 'Active' },
      { id: 4, name: 'CTV News', icon: 'CTVN', category: 'News', status: 'Active' },
      { id: 5, name: 'Global TV', icon: 'GLB', category: 'General', status: 'Active' },
      { id: 6, name: 'City TV', icon: 'CITY', category: 'General', status: 'Active' },
      { id: 7, name: 'CTV2', icon: 'CTV2', category: 'General', status: 'Active' },
      { id: 8, name: 'Citytv', icon: 'CITV', category: 'Entertainment', status: 'Active' },
      { id: 9, name: 'APTN', icon: 'APTN', category: 'General', status: 'Active' },
      { id: 10, name: 'CPAC', icon: 'CPAC', category: 'News', status: 'Active' },
      
      // Sports
      { id: 11, name: 'TSN', icon: 'TSN', category: 'Sports', status: 'Active' },
      { id: 12, name: 'TSN2', icon: 'TSN2', category: 'Sports', status: 'Active' },
      { id: 13, name: 'TSN3', icon: 'TSN3', category: 'Sports', status: 'Active' },
      { id: 14, name: 'TSN4', icon: 'TSN4', category: 'Sports', status: 'Active' },
      { id: 15, name: 'TSN5', icon: 'TSN5', category: 'Sports', status: 'Active' },
      { id: 16, name: 'Sportsnet', icon: 'SN', category: 'Sports', status: 'Active' },
      { id: 17, name: 'Sportsnet One', icon: 'SN1', category: 'Sports', status: 'Active' },
      { id: 18, name: 'Sportsnet 360', icon: 'SN360', category: 'Sports', status: 'Active' },
      { id: 19, name: 'Sportsnet World', icon: 'SNW', category: 'Sports', status: 'Active' },
      { id: 20, name: 'RDS', icon: 'RDS', category: 'Sports', status: 'Active' },
      { id: 21, name: 'RDS2', icon: 'RDS2', category: 'Sports', status: 'Active' },
      { id: 22, name: 'TVA Sports', icon: 'TVAS', category: 'Sports', status: 'Active' },
      
      // Entertainment
      { id: 23, name: 'CTV Drama', icon: 'CTVD', category: 'Entertainment', status: 'Active' },
      { id: 24, name: 'CTV Comedy', icon: 'CTVC', category: 'Comedy', status: 'Active' },
      { id: 25, name: 'CTV Sci-Fi', icon: 'CTVS', category: 'Sci-Fi', status: 'Active' },
      { id: 26, name: 'Bravo', icon: 'BRVO', category: 'Entertainment', status: 'Active' },
      { id: 27, name: 'E!', icon: 'E!', category: 'Entertainment', status: 'Active' },
      { id: 28, name: 'W Network', icon: 'W', category: 'Entertainment', status: 'Active' },
      { id: 29, name: 'Slice', icon: 'SLCE', category: 'Lifestyle', status: 'Active' },
      { id: 30, name: 'Showcase', icon: 'SHOW', category: 'Entertainment', status: 'Active' },
      
      // Kids & Family
      { id: 31, name: 'YTV', icon: 'YTV', category: 'Kids', status: 'Active' },
      { id: 32, name: 'Treehouse', icon: 'TREE', category: 'Kids', status: 'Active' },
      { id: 33, name: 'Teletoon', icon: 'TELE', category: 'Kids', status: 'Active' },
      { id: 34, name: 'Disney Channel', icon: 'DISN', category: 'Kids', status: 'Active' },
      { id: 35, name: 'Family Channel', icon: 'FAM', category: 'Kids', status: 'Active' },
      { id: 36, name: 'Nickelodeon', icon: 'NICK', category: 'Kids', status: 'Active' },
      { id: 37, name: 'Cartoon Network', icon: 'CN', category: 'Kids', status: 'Active' },
      
      // Movies
      { id: 38, name: 'Hollywood Suite', icon: 'HS', category: 'Movies', status: 'Active' },
      { id: 39, name: 'Super Channel', icon: 'SUPR', category: 'Movies', status: 'Active' },
      { id: 40, name: 'TMN', icon: 'TMN', category: 'Movies', status: 'Active' },
      { id: 41, name: 'Movie Central', icon: 'MC', category: 'Movies', status: 'Active' },
      
      // Documentary & Educational
      { id: 42, name: 'Discovery', icon: 'DISC', category: 'Documentary', status: 'Active' },
      { id: 43, name: 'National Geographic', icon: 'NGC', category: 'Documentary', status: 'Active' },
      { id: 44, name: 'History', icon: 'HIST', category: 'Documentary', status: 'Active' },
      { id: 45, name: 'Discovery Science', icon: 'DSCI', category: 'Documentary', status: 'Active' },
      { id: 46, name: 'Animal Planet', icon: 'ANPL', category: 'Documentary', status: 'Active' },
      { id: 47, name: 'OLN', icon: 'OLN', category: 'Outdoor', status: 'Active' },
      { id: 48, name: 'Cottage Life', icon: 'COTT', category: 'Lifestyle', status: 'Active' },
      
      // Lifestyle
      { id: 49, name: 'HGTV', icon: 'HGTV', category: 'Lifestyle', status: 'Active' },
      { id: 50, name: 'Food Network', icon: 'FOOD', category: 'Cooking', status: 'Active' },
      { id: 51, name: 'Gusto', icon: 'GUST', category: 'Cooking', status: 'Active' },
      { id: 52, name: 'Cooking Channel', icon: 'COOK', category: 'Cooking', status: 'Active' },
      { id: 53, name: 'DIY Network', icon: 'DIY', category: 'Lifestyle', status: 'Active' },
      
      // Music
      { id: 54, name: 'Much', icon: 'MUCH', category: 'Music', status: 'Active' },
      { id: 55, name: 'MTV', icon: 'MTV', category: 'Music', status: 'Active' },
      { id: 56, name: 'MTV2', icon: 'MTV2', category: 'Music', status: 'Active' },
      { id: 57, name: 'CMT', icon: 'CMT', category: 'Music', status: 'Active' },
      { id: 58, name: 'Stingray Music', icon: 'STNG', category: 'Music', status: 'Active' },
      
      // French Language
      { id: 59, name: 'TVA', icon: 'TVA', category: 'General', status: 'Active' },
      { id: 60, name: 'Ici Radio-Canada', icon: 'ICI', category: 'General', status: 'Active' },
      { id: 61, name: 'Noovo', icon: 'NOOV', category: 'General', status: 'Active' },
      { id: 62, name: 'V', icon: 'V', category: 'General', status: 'Active' },
      { id: 63, name: 'Télé-Québec', icon: 'TQ', category: 'General', status: 'Active' },
      { id: 64, name: 'Canal D', icon: 'CAND', category: 'Documentary', status: 'Active' },
      { id: 65, name: 'Canal Vie', icon: 'CANV', category: 'Lifestyle', status: 'Active' },
      { id: 66, name: 'VRAK', icon: 'VRAK', category: 'Entertainment', status: 'Active' },
      { id: 67, name: 'Ztélé', icon: 'ZTEL', category: 'Entertainment', status: 'Active' },
      { id: 68, name: 'Addik TV', icon: 'ADDK', category: 'Entertainment', status: 'Active' },
      
      // Specialty
      { id: 69, name: 'CP24', icon: 'CP24', category: 'News', status: 'Active' },
      { id: 70, name: 'BNN Bloomberg', icon: 'BNN', category: 'Business', status: 'Active' },
      { id: 71, name: 'AMI', icon: 'AMI', category: 'General', status: 'Active' },
      { id: 72, name: 'Vision TV', icon: 'VIS', category: 'Religious', status: 'Active' },
      { id: 73, name: 'The Weather Network', icon: 'TWN', category: 'Outdoor', status: 'Active' },
      { id: 74, name: 'MétéoMédia', icon: 'MM', category: 'Outdoor', status: 'Active' },
      { id: 75, name: 'Game+', icon: 'GAME', category: 'Entertainment', status: 'Active' },
    ]
  },
  { 
    name: 'Afghanistan', 
    code: 'af', 
    channelCount: 47, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Tolo TV', icon: 'TOLO', category: 'General', status: 'Live' },
      { id: 2, name: 'Ariana TV', icon: 'ARI', category: 'General', status: 'Live' },
      { id: 3, name: '1TV Afghanistan', icon: '1TV', category: 'News', status: 'Live' },
      { id: 4, name: 'Lemar TV', icon: 'LMR', category: 'Entertainment', status: 'Live' },
    ]
  },
  { 
    name: 'Aland', 
    code: 'ax', 
    channelCount: 1, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Åland TV', icon: 'ÅTV', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Albania', 
    code: 'al', 
    channelCount: 120, 
    status: 'Available',
    channels: [
      { id: 1, name: 'RTSH', icon: 'RTSH', category: 'General', status: 'Live' },
      { id: 2, name: 'Top Channel', icon: 'TOP', category: 'General', status: 'Live' },
      { id: 3, name: 'Klan TV', icon: 'KLAN', category: 'Entertainment', status: 'Live' },
      { id: 4, name: 'Vizion Plus', icon: 'VIZ+', category: 'General', status: 'Live' },
      { id: 5, name: 'News 24', icon: 'N24', category: 'News', status: 'Live' },
    ]
  },
  { 
    name: 'Algeria', 
    code: 'dz', 
    channelCount: 48, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ENTV', icon: 'ENTV', category: 'General', status: 'Live' },
      { id: 2, name: 'Echorouk TV', icon: 'ECH', category: 'News', status: 'Live' },
      { id: 3, name: 'Ennahar TV', icon: 'ENN', category: 'News', status: 'Live' },
      { id: 4, name: 'Canal Algérie', icon: 'CAL', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'American Samoa', 
    code: 'as', 
    channelCount: 6, 
    status: 'Available',
    channels: [
      { id: 1, name: 'KVZK-TV', icon: 'KVZK', category: 'General', status: 'Live' },
      { id: 2, name: 'KKHJ-LP', icon: 'KKHJ', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Andorra', 
    code: 'ad', 
    channelCount: 2, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ATV', icon: 'ATV', category: 'General', status: 'Live' },
      { id: 2, name: 'Andorra Televisió', icon: 'AND', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Angola', 
    code: 'ao', 
    channelCount: 35, 
    status: 'Available',
    channels: [
      { id: 1, name: 'TPA', icon: 'TPA', category: 'General', status: 'Live' },
      { id: 2, name: 'TV Zimbo', icon: 'ZMB', category: 'General', status: 'Live' },
      { id: 3, name: 'Record TV Angola', icon: 'REC', category: 'General', status: 'Live' },
      { id: 4, name: 'Zap Viva', icon: 'ZAP', category: 'Entertainment', status: 'Live' },
    ]
  },
  { 
    name: 'Anguilla', 
    code: 'ai', 
    channelCount: 3, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Caribbean Cable', icon: 'CCC', category: 'General', status: 'Live' },
      { id: 2, name: 'AXA TV', icon: 'AXA', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Antarctica', 
    code: 'aq', 
    channelCount: 0, 
    status: 'Coming Soon',
    channels: []
  },
  { 
    name: 'Antigua and Barbuda', 
    code: 'ag', 
    channelCount: 2, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ABS TV', icon: 'ABS', category: 'General', status: 'Live' },
      { id: 2, name: 'Observer Radio', icon: 'OBS', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Argentina', 
    code: 'ar', 
    channelCount: 375, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Telefe', icon: 'TLF', category: 'General', status: 'Live' },
      { id: 2, name: 'El Trece', icon: 'TR13', category: 'General', status: 'Live' },
      { id: 3, name: 'América TV', icon: 'AME', category: 'General', status: 'Live' },
      { id: 4, name: 'TN', icon: 'TN', category: 'News', status: 'Live' },
      { id: 5, name: 'ESPN Argentina', icon: 'ESPN', category: 'Sports', status: 'Live' },
      { id: 6, name: 'Fox Sports', icon: 'FOX', category: 'Sports', status: 'Live' },
    ]
  },
  { 
    name: 'Armenia', 
    code: 'am', 
    channelCount: 30, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Armenia 1', icon: 'ARM1', category: 'General', status: 'Live' },
      { id: 2, name: 'Shant TV', icon: 'SHT', category: 'General', status: 'Live' },
      { id: 3, name: 'Kentron TV', icon: 'KEN', category: 'General', status: 'Live' },
      { id: 4, name: 'Yerkir Media', icon: 'YRK', category: 'News', status: 'Live' },
    ]
  },
  { 
    name: 'Aruba', 
    code: 'aw', 
    channelCount: 14, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Telearuba', icon: 'TLA', category: 'General', status: 'Live' },
      { id: 2, name: 'ATV Aruba', icon: 'ATV', category: 'General', status: 'Live' },
      { id: 3, name: 'Canal 90', icon: 'C90', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Australia', 
    code: 'au', 
    channelCount: 812, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ABC', icon: 'ABC', category: 'General', status: 'Live' },
      { id: 2, name: 'Seven Network', icon: 'CH7', category: 'General', status: 'Live' },
      { id: 3, name: 'Nine Network', icon: 'CH9', category: 'General', status: 'Live' },
      { id: 4, name: 'Ten Network', icon: 'CH10', category: 'General', status: 'Live' },
      { id: 5, name: 'SBS', icon: 'SBS', category: 'General', status: 'Live' },
      { id: 6, name: 'Fox Sports', icon: 'FOX', category: 'Sports', status: 'Live' },
    ]
  },
  { 
    name: 'Austria', 
    code: 'at', 
    channelCount: 109, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ORF1', icon: 'ORF1', category: 'General', status: 'Live' },
      { id: 2, name: 'ORF2', icon: 'ORF2', category: 'General', status: 'Live' },
      { id: 3, name: 'ATV', icon: 'ATV', category: 'General', status: 'Live' },
      { id: 4, name: 'Servus TV', icon: 'SRV', category: 'General', status: 'Live' },
      { id: 5, name: 'Puls 4', icon: 'PLS4', category: 'Entertainment', status: 'Live' },
    ]
  },
  { 
    name: 'Azerbaijan', 
    code: 'az', 
    channelCount: 28, 
    status: 'Available',
    channels: [
      { id: 1, name: 'AzTV', icon: 'AZTV', category: 'General', status: 'Live' },
      { id: 2, name: 'İTV', icon: 'ITV', category: 'General', status: 'Live' },
      { id: 3, name: 'Space TV', icon: 'SPC', category: 'General', status: 'Live' },
      { id: 4, name: 'Lider TV', icon: 'LDR', category: 'News', status: 'Live' },
    ]
  },
  { 
    name: 'Bahamas', 
    code: 'bs', 
    channelCount: 14, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ZNS-TV', icon: 'ZNS', category: 'General', status: 'Live' },
      { id: 2, name: 'Cable Bahamas', icon: 'CBL', category: 'General', status: 'Live' },
      { id: 3, name: 'JCN', icon: 'JCN', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Bahrain', 
    code: 'bh', 
    channelCount: 6, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Bahrain TV', icon: 'BTV', category: 'General', status: 'Live' },
      { id: 2, name: 'Bahrain Sports', icon: 'BSP', category: 'Sports', status: 'Live' },
      { id: 3, name: 'Al Mamlaka', icon: 'MLK', category: 'General', status: 'Live' },
    ]
  },
];

export default function ChannelsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);
  const itemsPerPage = 10;

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCountries = filteredCountries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 text-sm font-semibold">World's #1 IPTV Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">37,591+</span>
            <span className="text-gray-900"> Live Channels</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Stream premium content from <span className="font-semibold text-gray-900">115+ countries</span> worldwide. Sports, entertainment, news, movies, and international content in stunning <span className="font-semibold text-gray-900">4K quality</span>.
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <a
              href="/#pricing"
              onClick={navigateToPricing}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-orange-500/50 transition-all shadow-lg hover:scale-105"
            >
              Start Watching Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Money-back Guarantee */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-sm">30-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Channel Logos and Table Section */}
      <div className="relative bg-gradient-to-b from-orange-400 via-red-500 to-pink-600 py-16">
        {/* Channel Logos Carousel */}
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Popular Channels</h2>
            <p className="text-white/90 text-base">Watch your favorite channels in HD & 4K quality</p>
          </div>
          <ChannelLogos />
        </div>

        {/* Countries Table */}
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            {/* Header with Search */}
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse by Country</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by country name..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wide">Country</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wide">Channels</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedCountries.map((country, index) => (
                    <>
                      <tr 
                        key={index} 
                        onClick={() => setSelectedCountry(selectedCountry?.name === country.name ? null : country)}
                        className="hover:bg-orange-50 transition-all cursor-pointer border-b border-gray-100 last:border-0"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <svg 
                              className={`w-5 h-5 text-gray-400 transition-transform ${selectedCountry?.name === country.name ? 'rotate-90' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <img
                              src={`https://flagcdn.com/w40/${country.code}.png`}
                              srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                              width="40"
                              alt={`${country.name} flag`}
                              className="rounded shadow-sm"
                            />
                            <span className="text-gray-900 font-medium">{country.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="font-semibold text-gray-900">{country.channelCount.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            country.status === 'Available' 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {country.status}
                          </span>
                        </td>
                      </tr>
                      
                      {/* Collapsible Channels Row */}
                      {selectedCountry?.name === country.name && (
                        <tr>
                          <td colSpan={3} className="px-0 py-0">
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                              <h4 className="text-lg font-bold text-gray-900 mb-4">
                                Channels for {country.name}
                              </h4>
                              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <table className="w-full">
                                  <thead className="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Channel</th>
                                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-200">
                                    {country.channels.map((channel) => (
                                      <tr key={channel.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3">
                                          <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-1.5 shadow-sm">
                                              <img
                                                src={`https://logo.clearbit.com/${channel.name.toLowerCase().replace(/\s+/g, '')}.com`}
                                                alt={channel.name}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                  const target = e.target as HTMLImageElement;
                                                  target.style.display = 'none';
                                                  const parent = target.parentElement;
                                                  if (parent) {
                                                    parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded flex items-center justify-center text-white font-bold text-xs">${channel.icon}</div>`;
                                                  }
                                                }}
                                              />
                                            </div>
                                            <span className="text-gray-900 text-sm font-medium">{channel.name}</span>
                                          </div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 text-sm">{channel.category}</td>
                                        <td className="px-4 py-3 text-center">
                                          <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                            {channel.status}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                                {country.channelCount > country.channels.length && (
                                  <div className="px-4 py-3 bg-gray-50 text-center text-sm text-gray-600">
                                    Showing {country.channels.length} of {country.channelCount.toLocaleString()} channels
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-t-2 border-gray-200 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-orange-50 hover:border-orange-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600">
                  Page <span className="font-bold text-gray-900">{currentPage}</span> of <span className="font-bold text-gray-900">{totalPages}</span>
                </span>
                <span className="text-xs text-gray-500">({filteredCountries.length} countries)</span>
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-orange-50 hover:border-orange-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/212618467167?text=Hello%2C%20I%20need%20help%20with%20StreamVibe%20IPTV.%20Can%20you%20assist%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all z-50 group"
          aria-label="Contact Us on WhatsApp"
        >
          <svg 
            className="w-6 h-6 transform group-hover:scale-110 transition-transform" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>

      <Footer />
    </main>
  );
}
