---
title: jess — Network Intrusion Detection  
author: jordan
date: 2025-11-02  
tags: [SOC, Snort, IDS, Packet Analysis, TryHackMe]  
duration: 1 hour 25 minutes  
---

# 🛡️ Snort Room — TryHackMe

This report documents the investigation of the **Snort Room** challenge on TryHackMe.  
**Objective:** Build Snort detection rules, analyze generated traffic, and interpret packet behavior.

---

## 🕒 Timeline

| Time (IST) | Action |
|-------------|--------|
| **11:02 AM** | VM started, room instructions reviewed |
| **11:10 AM** | PCAP and `traffic-generator.sh` retrieved |
| **11:18 AM** | Initial Snort test run with default config |
| **11:35 AM** | Custom rule created for HTTP detection |
| **12:00 PM** | Packet 63–65 analysis complete |

---

## 🧠 Key Learnings

- Identified false positives during ICMP traffic testing  
- Understood Snort’s packet decoding structure  
- Created custom rules to flag suspicious HTTP traffic

---

## 📸 Screenshots

![Snort Output](https://res.cloudinary.com/demo/image/upload/v12345/snort_output.png)

---

## ✅ Conclusion

This exercise demonstrated how Snort detects malicious network activity through rule-based matching and packet inspection.
