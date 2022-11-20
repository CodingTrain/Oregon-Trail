#!/bin/sh
mkdir ../extracted/

gcc a2tools.c -DUNIX -o a2tools

./a2tools dir ../Oregon\ Trail\ 1.do > ../extracted/catalog.txt

./a2tools out ../Oregon\ Trail\ 1.do    HELLO             ../extracted/SIDE1-000-HELLO.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    OREGON.IMA        ../extracted/SIDE1-001-OREGON.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    TOMB.LIB          ../extracted/SIDE1-002-TOMB.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    BUY.LIB           ../extracted/SIDE1-003-BUY.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    RIVER.LIB         ../extracted/SIDE1-004-RIVER.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    PACE.LIB          ../extracted/SIDE1-005-PACE.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    RATION.LIB        ../extracted/SIDE1-006-RATION.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    PART.LIB          ../extracted/SIDE1-007-PART.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    TRADE.LIB         ../extracted/SIDE1-008-TRADE.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    MAP.LIB           ../extracted/SIDE1-009-MAP.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    TALK.LIB          ../extracted/SIDE1-010-TALK.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    HUNT.LIB          ../extracted/SIDE1-011-HUNT.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    LF.LIB            ../extracted/SIDE1-012-LF.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    CROSS.LIB         ../extracted/SIDE1-013-CROSS.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    L0.PCK            ../extracted/SIDE1-014-L0.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    L1.PCK            ../extracted/SIDE1-015-L1.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    L2.PCK            ../extracted/SIDE1-016-L2.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    L3.PCK            ../extracted/SIDE1-017-L3.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    L4.PCK            ../extracted/SIDE1-018-L4.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    M0.PCK            ../extracted/SIDE1-019-M0.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    TS.PCK            ../extracted/SIDE1-020-TS.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    OREGON1.SEQ       ../extracted/SIDE1-021-OREGON1.SEQ.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    HISCORE.SEQ       ../extracted/SIDE1-022-HISCORE.SEQ.bin
./a2tools out ../Oregon\ Trail\ 1.do    TOMB.SEQ          ../extracted/SIDE1-023-TOMB.SEQ.bin
./a2tools out ../Oregon\ Trail\ 1.do    MS0.BIN           ../extracted/SIDE1-024-MS0.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    MS1.BIN           ../extracted/SIDE1-025-MS1.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    MS2.BIN           ../extracted/SIDE1-026-MS2.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    MS3.BIN           ../extracted/SIDE1-027-MS3.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    MS4.BIN           ../extracted/SIDE1-028-MS4.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    VAR.BIN           ../extracted/SIDE1-029-VAR.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    PT.BIN            ../extracted/SIDE1-030-PT.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    TS.BIN            ../extracted/SIDE1-031-TS.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    PRAIRIE.IMA       ../extracted/SIDE1-032-PRAIRIE.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    FIRST.IMA         ../extracted/SIDE1-033-FIRST.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    EVENTS.IMA        ../extracted/SIDE1-034-EVENTS.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    RIVER.IMA         ../extracted/SIDE1-035-RIVER.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    COMMON.LIB        ../extracted/SIDE1-036-COMMON.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    MECC\$\$DISK      ../extracted/SIDE1-037-MECC\$\$DISK.locked.bin
./a2tools out ../Oregon\ Trail\ 1.do    OREGON\ TRAIL     ../extracted/SIDE1-038-OREGON\ TRAIL.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    BUY\ SUPPLIES     ../extracted/SIDE1-039-BUY\ SUPPLIES.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    MENU              ../extracted/SIDE1-040-MENU.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    MANAGEMENT        ../extracted/SIDE1-041-MANAGEMENT.locked.txt
./a2tools out ../Oregon\ Trail\ 1.do    FLIP.LIB          ../extracted/SIDE1-042-FLIP.LIB.locked.txt

./a2tools dir ../Oregon\ Trail\ 2.do >> ../extracted/catalog.txt

./a2tools out ../Oregon\ Trail\ 2.do    OREGON.IMA        ../extracted/SIDE2-000-OREGON.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    PART.LIB          ../extracted/SIDE2-001-PART.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    RIVER.LIB         ../extracted/SIDE2-002-RIVER.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    BUY.LIB           ../extracted/SIDE2-003-BUY.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    TRADE.LIB         ../extracted/SIDE2-004-TRADE.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    TOMB.LIB          ../extracted/SIDE2-005-TOMB.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    PACE.LIB          ../extracted/SIDE2-006-PACE.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    RATION.LIB        ../extracted/SIDE2-007-RATION.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    MAP.LIB           ../extracted/SIDE2-008-MAP.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    TALK.LIB          ../extracted/SIDE2-009-TALK.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    HUNT.LIB          ../extracted/SIDE2-010-HUNT.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    END.LIB           ../extracted/SIDE2-011-END.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    LF.LIB            ../extracted/SIDE2-012-LF.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    CROSS.LIB         ../extracted/SIDE2-013-CROSS.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    OREGON2.SEQ       ../extracted/SIDE2-014-OREGON2.SEQ.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    TOMB.SEQ          ../extracted/SIDE2-015-TOMB.SEQ.bin
./a2tools out ../Oregon\ Trail\ 2.do    L5.PCK            ../extracted/SIDE2-016-L5.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L6.PCK            ../extracted/SIDE2-017-L6.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L7.PCK            ../extracted/SIDE2-018-L7.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L8.PCK            ../extracted/SIDE2-019-L8.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L9.PCK            ../extracted/SIDE2-020-L9.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L10.PCK           ../extracted/SIDE2-021-L10.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L11.PCK           ../extracted/SIDE2-022-L11.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L12.PCK           ../extracted/SIDE2-023-L12.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L13.PCK           ../extracted/SIDE2-024-L13.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L16.PCK           ../extracted/SIDE2-025-L16.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L17.PCK           ../extracted/SIDE2-026-L17.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L15.PCK           ../extracted/SIDE2-027-L15.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    M0.PCK            ../extracted/SIDE2-028-M0.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    TS.PCK            ../extracted/SIDE2-029-TS.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS5.BIN           ../extracted/SIDE2-030-MS5.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS6.BIN           ../extracted/SIDE2-031-MS6.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS7.BIN           ../extracted/SIDE2-032-MS7.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS8.BIN           ../extracted/SIDE2-033-MS8.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS9.BIN           ../extracted/SIDE2-034-MS9.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS10.BIN          ../extracted/SIDE2-035-MS10.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS11.BIN          ../extracted/SIDE2-036-MS11.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS12.BIN          ../extracted/SIDE2-037-MS12.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS13.BIN          ../extracted/SIDE2-038-MS13.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS14.BIN          ../extracted/SIDE2-039-MS14.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS15.BIN          ../extracted/SIDE2-040-MS15.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MS16.BIN          ../extracted/SIDE2-041-MS16.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    FLOAT             ../extracted/SIDE2-042-FLOAT.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    ORSPRITE.IMA      ../extracted/SIDE2-043-ORSPRITE.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    TS.BIN            ../extracted/SIDE2-044-TS.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MOUNTAINS.IMA     ../extracted/SIDE2-045-MOUNTAINS.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    RIVER.IMA         ../extracted/SIDE2-046-RIVER.IMA.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MECC\$\$DISK      ../extracted/SIDE2-047-MECC\$\$DISK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    MENU              ../extracted/SIDE2-048-MENU.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    WIN               ../extracted/SIDE2-049-WIN.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    DALLESUTIL.OBJ    ../extracted/SIDE2-050-DALLESUTIL.OBJ.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    FLIP.LIB          ../extracted/SIDE2-051-FLIP.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    COMMON.LIB        ../extracted/SIDE2-052-COMMON.LIB.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    RIVER.PCK         ../extracted/SIDE2-053-RIVER.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    L14.PCK           ../extracted/SIDE2-054-L14.PCK.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    HELLO             ../extracted/SIDE2-055-HELLO.locked.txt
./a2tools out ../Oregon\ Trail\ 2.do    MS17.BIN          ../extracted/SIDE2-056-MS17.BIN.locked.bin
./a2tools out ../Oregon\ Trail\ 2.do    TEST\ FLOAT       ../extracted/SIDE2-057-TEST\ FLOAT.txt
