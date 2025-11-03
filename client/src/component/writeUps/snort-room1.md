---
title: Snort Room — IDS/IPS 
author: INSAEN
date: 2025-11-02  
tags: [SOC, Snort, IDS,IPS,Packet Analysis, TryHackMe]  
duration: 1 hour 25 minutes  e
---

# 🛡️ Snort Room — TryHackMe

This report documents the investigation of the **Snort Room** challenge on TryHackMe.  
**Objective:** What is IDS/IPS ,Snort modes,Build Snort detection rules, analyze generated traffic, and interpret packet behavior.

---

## 🧠 Key Learnings

- Understood how an **IDS (Intrusion Detection System)** differs from an **IPS (Intrusion Prevention System)** — IDS detects and alerts, IPS can actively block.
- Learned the **four operation modes** of Snort:
  1. **Sniffer mode** — monitors live traffic in real time.
  2. **Packet Logger mode** — logs packets to disk for offline analysis.
  3. **Network IDS/IPS mode** — uses rule-based detection to generate alerts.
  4. **PCAP Investigation mode** — processes pre-captured traffic for forensic review.
- Practiced using **Snort CLI options** like:
  - `-r` for reading pcap/log files  
  - `-A full` for detailed alerts  
  - `-c` for custom configuration  
  - `-l` to define output directory  
  - `-n` to limit number of packets processed
- Learned to **write and test custom Snort rules**, including filters for:
  - Specific IP IDs, flags (SYN, PUSH-ACK)
  - UDP packets with same source and destination IPs
- Interpreted **Snort output statistics**: number of alerts, queued TCP segments, and extracted HTTP headers.
- Gained a deeper understanding of **how signatures trigger**, **how Snort reads packets**, and **how PCAP data reveals attack patterns**.
- Recognized the importance of **fine-tuning rules** to reduce false positives and make alerts actionable.


---
## Task 1 
### We were asked to analyse snort.log.1640048004 , a snort log file to find
- ip id of 10th packet
- referer of the 4th packet
- Ack number of the 8th packet?  

### Commands Used
```snort
 snort -r snort.log.* -n 10 (-n for till what number read)
 snort -r -X snort.log.* -n 4 (-X for in detail full raw hex0)
 snort -r snort.log.* -n 8 
```
### Results:
- Alerts generated: 170
- TCP Segments Queued: 18
- HTTP Response Headers Extracted: 3

## 📸 Screenshots
![Snort Output](https://res.cloudinary.com/demo/image/upload/v12345/snort_output.png)

---
## Task 2
### We were asked to analyse 3 pcap files, 
- analyze mx-1.pcap with deafault config find no. of alerts ,http and tcp
- analyze mx-2 and mx-3 pcap together and find the total no of alters

### Commands Used
```snort
 sudo snort -c /etc/snort/snort/conf -r mx-1.pcap -A full -l .  (default configuration - /etc/snort/snort/conf, Verbose alert - -A full)
 sudo snort -c /etc/snort/snort.conf --pcap-list="mx-2.pcap mx-3.pcap" -A full -l . 
```
### Results:
#### mx-1.pcap
- Alerts generated: 170
- TCP Segments Queued: 18
- HTTP Response Headers Extracted: 3

#### mx-2.pcap mx-3.pcap
- combined alerts

## 📸 Screenshots
![Snort Output](https://res.cloudinary.com/demo/image/upload/v12345/snort_output.png)

---
## Task 3
### We were asked to create rules for snort and run it again the given pcap
- Write a rule to filter IP ID "35369"
- Create a rule to filter packets with Syn flag
- Write a rule to filter packets with Push-Ack flags
- Create a rule to filter UDP packets with the same source and destination IP

## syntax
### Commands Used
```snort
 alert IP any <> any any (msg:"ip 35369 matched";id:`35369`;rev:1;sid:100001)
 alert TCP any <> any any (msg:"SYN found";flag:`S`;rev:1;sid:100002)
 alert TCP any <> any any (msg:"PUSH-ACK found";flag:`PA`;rev:1;sid:100003)
 alert UDP any <> any any (msg:"Same destination and source IP";`sameip`;rev:1;sid:100003)
```

## 📸 Screenshots
![Snort Output](https://res.cloudinary.com/demo/image/upload/v12345/snort_output.png)

---


## ✅ Conclusion

This room is basic , helps in analyzing the logs and pcap files and different modes of snort, and most important how to write rules for snort
