/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Application data
const appData = {
    visualFeed: {
        items: [
            {
                title: 'City at Dusk',
                subtitle: 'Urban landscape as night falls.',
                lightImage: 'l-img/l1.png',
                darkImage: 'd-img/d1.png'
            },
            {
                title: 'Mountain Range',
                subtitle: 'Sunlight over the peaks.',
                lightImage: 'l-img/l2.png',
                darkImage: 'd-img/d2.png'
            },
            {
                title: 'Forest Path',
                subtitle: 'A journey through the woods.',
                lightImage: 'l-img/l3.png',
                darkImage: 'd-img/d3.png'
            },
            {
                title: 'Coastal View',
                subtitle: 'Waves crashing on the shore.',
                lightImage: 'l-img/l4.png',
                darkImage: 'd-img/d4.png'
            }
        ]
    },

    collaborationPanel: {
        id: 'collaboration-panel',
        title: 'Programs & Collaboration',
        cards: [
            {
                id: 'theme-toggle',
                code: 'THM-000',
                title: 'THEME',
                subtitle: 'DARK MODE',
                icon: 'fas fa-moon',
                classes: ['bg']
            },
            {
                code: 'SET-001',
                title: 'SETTINGS',
                subtitle: 'System Config',
                icon: 'fas fa-cog'
            },
            {
                id: 'login-toggle',
                code: 'LOG-002',
                title: 'LOGIN',
                subtitle: 'Access Console',
                icon: 'fas fa-sign-in-alt'
            },
            {
                id: 'addons-toggle',
                code: 'ADD-003',
                title: 'ADDONS',
                subtitle: 'Manage Extensions',
                icon: 'fas fa-puzzle-piece'
            },
            {
                code: 'COM-001',
                title: 'CHAT OPS',
                subtitle: 'Team Communication',
                icon: 'fas fa-comments',
                status: '',
                footer: 'COMMUNICATION'
            },
            {
                code: 'DOC-002',
                title: 'QUIP',
                subtitle: 'Document Collaboration',
                icon: 'fas fa-users-cog',
                status: '',
                footer: 'COLLABORATION'
            },
            {
                code: 'AI-003',
                title: 'CONSOLE HARMONY',
                subtitle: 'AI Assistant Platform',
                icon: 'fas fa-robot',
                status: 'ACTIVE',
                footer: 'CORE SYSTEM',
                id: 'console-harmony-card'
            },
            {
                code: 'XLS-004',
                title: 'EXCEL IN',
                subtitle: 'Check-in Documents',
                icon: 'fas fa-file-excel',
                status: 'READY',
                footer: 'DOCUMENTS'
            }
        ]
    },

    logisticsPanel: {
        id: 'logistics-fleet-panel',
        title: 'Logistics & Fleet',
        cards: [
            {
                code: 'GAT-005',
                title: 'SEZAM',
                subtitle: 'Gate Console WR05',
                icon: 'fas fa-warehouse',
                status: 'ACTIVE',
                footer: 'LOGISTICS'
            },
            {
                code: 'YRD-006',
                title: 'YARD MANAGEMENT',
                subtitle: 'Ship Clerk System',
                icon: 'fas fa-clipboard-list',
                status: 'ACTIVE',
                footer: 'LOGISTICS'
            },
            {
                code: 'EVT-007',
                title: 'EVENT HISTORY',
                subtitle: 'WR05 Event Report',
                icon: 'fas fa-history',
                status: 'TRACKING',
                footer: 'LOGISTICS'
            },
            {
                code: 'FMC-008',
                title: 'FLEET MANAGEMENT',
                subtitle: 'Execution Console',
                icon: 'fas fa-truck',
                status: 'RUNNING',
                footer: 'FLEET'
            },
            {
                code: 'TRK-009',
                title: 'PACKAGE TRACKING',
                subtitle: 'Relay System',
                icon: 'fas fa-search-location',
                status: 'LIVE',
                footer: 'TRACKING'
            },
            {
                code: 'OUT-010',
                title: 'OUTBOUND DOCK',
                subtitle: 'SSP Dock WRZ',
                icon: 'fas fa-dolly-flatbed',
                status: 'ACTIVE',
                footer: 'DOCK'
            },
            {
                code: 'GTD-011',
                title: 'GTDR CHECKLIST',
                subtitle: 'Amazon Logistics',
                icon: 'fas fa-check-square',
                status: 'READY',
                footer: 'CHECKLIST'
            },
            {
                code: 'Y36-012',
                title: 'YARD 360',
                subtitle: 'Appointment System',
                icon: 'fas fa-calendar-alt',
                status: 'SCHEDULED',
                footer: 'APPOINTMENTS'
            },
            {
                code: 'PAN-013',
                title: 'PANORAMA',
                subtitle: 'SL WR05 Overview',
                icon: 'fas fa-eye',
                status: 'MONITORING',
                footer: 'OVERVIEW'
            }
        ]
    },

    securityPanel: {
        id: 'support-security-panel',
        title: 'Security, Support, Dock Operations',
        cards: [
            {
                code: 'DCK-016',
                title: 'DOCK SEARCH',
                subtitle: 'Appointment Search',
                icon: 'fas fa-search',
                status: 'SEARCH',
                footer: 'DOCK OPERATIONS',
                class: 'en' // Add this line
            },
            {
                code: 'DCK-017',
                title: 'DOCKMASTER',
                subtitle: 'WR05 Day Schedule',
                icon: 'fas fa-user-tie',
                status: 'ACTIVE',
                footer: 'DOCK OPERATIONS',
                class: 'en'
            },
            {
                code: 'DEV-014',
                title: 'DEVICE ACTIVATION',
                subtitle: 'Corporate Devices',
                icon: 'fas fa-power-off',
                status: 'READY',
                footer: 'IT Support'
            },
            {
                code: 'PWD-015',
                title: 'PASSWORD MANAGER',
                subtitle: 'Corporate Passwords',
                icon: 'fas fa-key',
                status: 'SECURE',
                footer: 'Security'
            },
            {
                code: 'ISS-018',
                title: 'ISSUE TRACKER',
                subtitle: 'Bug Reports & Tasks',
                icon: 'fas fa-exclamation-triangle',
                status: 'ACTIVE',
                footer: 'Support'
            },
            {
                code: 'PRM-019',
                title: 'PERMISSIONS',
                subtitle: 'Access Control',
                icon: 'fas fa-user-shield',
                status: 'SECURE',
                footer: 'Security'
            }
        ]
    }
};

class CommandCenter {
    constructor() {
        this.appRoot = document.getElementById('app-root');
        this.currentFeedIndex = 0;
        this.autoSlideInterval = null;
        this.clockInterval = null;
        this.consoleClockInterval = null;
        this.uptimeInterval = null;
        this.areAddonsLoaded = false;
        this.startTime = Date.now();

        this.init();
    }

    init() {
        this.createMainStructure();
        this.setupEventListeners();
        this.initializeFeatures();
    }

    createMainStructure() {
        // Create main grid container
        const mainGrid = document.createElement('div');
        mainGrid.className = 'main-grid-container';

        // Create visual feed panel
        mainGrid.appendChild(this.createVisualFeedPanel());

        // Create collaboration panel
        mainGrid.appendChild(this.createCollaborationPanel());

        // Create bottom panels container
        const bottomContainer = document.createElement('div');
        bottomContainer.id = 'bottom-panels-container';

        bottomContainer.appendChild(this.createPanel(appData.logisticsPanel));
        bottomContainer.appendChild(this.createPanel(appData.securityPanel));

        mainGrid.appendChild(bottomContainer);

        // Create modals
        mainGrid.appendChild(this.createLoginModal());
        mainGrid.appendChild(this.createAddonsModal());
        mainGrid.appendChild(this.createHelpModal());
        mainGrid.appendChild(this.createAboutModal());

        // Create footer
        mainGrid.appendChild(this.createFooter());

        this.appRoot.appendChild(mainGrid);
    }

    createVisualFeedPanel() {
        const panel = document.createElement('div');
        panel.id = 'visual-feed';
        panel.className = 'panel';

        const header = document.createElement('div');
        header.className = 'panel-header';
        header.textContent = 'Visual Feed';

        // Time and date display
        const timeDisplay = document.createElement('div');
        timeDisplay.id = 'time-display';
        timeDisplay.style.cssText = `
            position: absolute;
            top: 50px;
            right: 2rem;
            font-size: 3rem;
            font-weight: 700;
            color: var(--text-color);
            background: rgba(0, 0, 0, 0.5);
            padding: 0.5rem 1rem;
            border: 1px solid var(--border-color);
            z-index: 11;
            font-family: "JetBrains Mono", "Share Tech Mono", monaco, courier;
        `;

        const dateDisplay = document.createElement('div');
        dateDisplay.id = 'date-display';
        dateDisplay.style.cssText = `
            position: absolute;
            top: 120px;
            right: 2rem;
            font-size: 1.2rem;
            color: var(--text-muted);
            text-transform: uppercase;
            font-weight: 700;
            z-index: 11;
        `;

        // Carousel container
        const carouselContainer = document.createElement('div');
        carouselContainer.style.cssText = `
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        `;

        const carouselInner = document.createElement('div');
        carouselInner.id = 'carousel-inner';
        carouselInner.style.cssText = `
            display: flex;
            width: ${appData.visualFeed.items.length * 100}%;
            height: 100%;
            transition: transform 0.5s ease;
        `;

        // Create carousel items
        appData.visualFeed.items.forEach((item, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            carouselItem.setAttribute('data-index', index);

            // Get initial image based on current theme
            const currentTheme = document.documentElement.getAttribute('theme') || 'dark';
            const imageUrl = currentTheme === 'dark' ? item.darkImage : item.lightImage;

            carouselItem.style.cssText = `
                width: ${100 / appData.visualFeed.items.length}%;
                height: 100%;
                position: relative;
            `;

            // Create blur background layer
            const blurLayer = document.createElement('div');
            blurLayer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url('${imageUrl}');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                filter: blur(5px);
                opacity: 0.7;
                z-index: 1;
            `;

            // Create main image layer
            const mainImageLayer = document.createElement('div');
            mainImageLayer.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 60%;
                height: 60%;
                background-image: url('${imageUrl}');
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                z-index: 2;
            `;

            carouselItem.appendChild(blurLayer);
            carouselItem.appendChild(mainImageLayer);

            const itemOverlay = document.createElement('div');
            itemOverlay.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
                padding: 2rem;
                color: var(--text-color);
                z-index: 3;
            `;

            const itemTitle = document.createElement('div');
            itemTitle.style.cssText = `
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
            `;
            itemTitle.textContent = item.title;

            const itemSubtitle = document.createElement('div');
            itemSubtitle.style.cssText = `
                font-size: 1rem;
                color: var(--text-muted);
            `;
            itemSubtitle.textContent = item.subtitle;

            itemOverlay.appendChild(itemTitle);
            itemOverlay.appendChild(itemSubtitle);
            carouselItem.appendChild(itemOverlay);
            carouselInner.appendChild(carouselItem);
        });

        // Navigation buttons
        const prevBtn = document.createElement('button');
        prevBtn.id = 'prev-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.style.cssText = `
            position: absolute;
            left: 0rem;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border-color);
            color: var(--highlight-color);
            width: 40px;
            height: 80px;
            border-radius: 0%;
            cursor: pointer;
            z-index: 12;
            transition: all 0.3s ease;
        `;

        const nextBtn = document.createElement('button');
        nextBtn.id = 'next-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.style.cssText = `
            position: absolute;
            right: 0rem;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border-color);
            color: var(--highlight-color);
            width: 40px;
            height: 80px;
            border-radius: 0%;
            cursor: pointer;
            z-index: 12;
            transition: all 0.3s ease;
        `;

        // Dot indicators
        const dotIndicators = document.createElement('div');
        dotIndicators.id = 'dot-indicators';
        dotIndicators.style.cssText = `
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.5rem;
            z-index: 12;
        `;

        carouselContainer.appendChild(carouselInner);
        carouselContainer.appendChild(prevBtn);
        carouselContainer.appendChild(nextBtn);
        carouselContainer.appendChild(dotIndicators);

        panel.appendChild(header);
        panel.appendChild(timeDisplay);
        panel.appendChild(dateDisplay);
        panel.appendChild(carouselContainer);

        return panel;
    }

    createCollaborationPanel() {
        const panel = document.createElement('div');
        panel.id = appData.collaborationPanel.id;
        panel.className = 'panel';

        const header = document.createElement('div');
        header.className = 'panel-header';
        header.textContent = appData.collaborationPanel.title;

        const content = document.createElement('div');
        content.className = 'panel-content';

        // Create action buttons grid (first 4 cards)
        const actionGrid = document.createElement('div');
        actionGrid.className = 'action-buttons-grid';

        for (let i = 0; i < 4; i++) {
            const card = this.createActionCard(appData.collaborationPanel.cards[i]);
            actionGrid.appendChild(card);
        }
        content.appendChild(actionGrid);

        // Create remaining cards
        for (let i = 4; i < appData.collaborationPanel.cards.length; i++) {
            const card = this.createInfoCard(appData.collaborationPanel.cards[i]);
            content.appendChild(card);
        }

        panel.appendChild(header);
        panel.appendChild(content);

        return panel;
    }

    createPanel(panelData) {
        const panel = document.createElement('div');
        panel.id = panelData.id;
        panel.className = 'panel';
        if (panelData.classes) {
            panel.classList.add(...panelData.classes);
        }

        const header = document.createElement('div');
        header.className = 'panel-header';
        header.textContent = panelData.title;

        const content = document.createElement('div');
        content.className = 'panel-content';

        panelData.cards.forEach(cardData => {
            const card = this.createInfoCard(cardData);
            content.appendChild(card);
        });

        panel.appendChild(header);
        panel.appendChild(content);

        return panel;
    }

    createActionCard(cardData) {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'info-card';
        if (cardData.classes) {
            card.classList.add(...cardData.classes);
        }
        if (cardData.id) {
            card.id = cardData.id;
        }

        const body = document.createElement('div');
        body.className = 'card-body';

        const icon = document.createElement('i');
        icon.className = `${cardData.icon} card-icon`;

        const titleSection = document.createElement('div');
        titleSection.className = 'card-title-section';

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = cardData.title;

        const subtitle = document.createElement('div');
        subtitle.className = 'card-subtitle';
        subtitle.textContent = cardData.subtitle;
        if (cardData.id === 'theme-toggle') {
            subtitle.id = 'theme-status';
        }

        titleSection.appendChild(title);
        titleSection.appendChild(subtitle);
        body.appendChild(icon);
        body.appendChild(titleSection);
        card.appendChild(body);

        // Add corner decorations
        this.addCornerDecorations(card);

        return card;
    }

    createInfoCard(cardData) {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'info-card';
        if (cardData.id) {
            card.id = cardData.id;
        }
        if (cardData.class) {
            card.classList.add(cardData.class);
        }

        // Card header (for cards with status)
        if (cardData.status !== undefined) {
            const header = document.createElement('div');
            header.className = 'card-header';

            const codeSpan = document.createElement('span');
            codeSpan.textContent = cardData.code;

            const statusSpan = document.createElement('span');
            statusSpan.className = 'card-status';
            if (cardData.status) {
                statusSpan.classList.add(cardData.status.toLowerCase());
                statusSpan.textContent = cardData.status;
            }

            header.appendChild(codeSpan);
            header.appendChild(statusSpan);
            card.appendChild(header);
        }

        // Card body
        const body = document.createElement('div');
        body.className = 'card-body';

        const icon = document.createElement('i');
        icon.className = `${cardData.icon} card-icon`;

        const titleSection = document.createElement('div');
        titleSection.className = 'card-title-section';

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = cardData.title;

        const subtitle = document.createElement('div');
        subtitle.className = 'card-subtitle';
        subtitle.textContent = cardData.subtitle;

        // Special handling for clock
        if (cardData.id === 'console-harmony-card') {
            subtitle.id = 'clock';
        }

        titleSection.appendChild(title);
        titleSection.appendChild(subtitle);
        body.appendChild(icon);
        body.appendChild(titleSection);
        card.appendChild(body);

        // Card footer
        if (cardData.footer) {
            const footer = document.createElement('div');
            footer.className = 'card-footer';
            footer.textContent = cardData.footer;
            card.appendChild(footer);
        }

        // Add corner decorations
        this.addCornerDecorations(card);

        return card;
    }

    addCornerDecorations(card) {
        // Create corner elements
        const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

        corners.forEach(cornerClass => {
            const corner = document.createElement('div');
            corner.className = `corner ${cornerClass}`;
            card.appendChild(corner);
        });
    }

    createLoginModal() {
        const modal = document.createElement('div');
        modal.id = 'login-modal';
        modal.className = 'modal hidden';

        const content = document.createElement('div');
        content.className = 'modal-content';

        const header = document.createElement('div');
        header.className = 'modal-header';

        const title = document.createElement('h2');
        title.textContent = 'Access Console';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        closeBtn.innerHTML = '&times;';

        header.appendChild(title);
        header.appendChild(closeBtn);

        const form = document.createElement('form');
        form.id = 'login-form';

        const operatorGroup = document.createElement('div');
        operatorGroup.className = 'form-group';
        const operatorLabel = document.createElement('label');
        operatorLabel.setAttribute('for', 'operator-id');
        operatorLabel.textContent = 'Operator ID';
        const operatorInput = document.createElement('input');
        operatorInput.type = 'text';
        operatorInput.id = 'operator-id';
        operatorInput.name = 'operator-id';
        operatorInput.required = true;
        operatorGroup.appendChild(operatorLabel);
        operatorGroup.appendChild(operatorInput);

        const passcodeGroup = document.createElement('div');
        passcodeGroup.className = 'form-group';
        const passcodeLabel = document.createElement('label');
        passcodeLabel.setAttribute('for', 'passcode');
        passcodeLabel.textContent = 'Passcode';
        const passcodeInput = document.createElement('input');
        passcodeInput.type = 'password';
        passcodeInput.id = 'passcode';
        passcodeInput.name = 'passcode';
        passcodeInput.required = true;
        passcodeGroup.appendChild(passcodeLabel);
        passcodeGroup.appendChild(passcodeInput);

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.className = 'modal-button';
        submitBtn.textContent = 'Authenticate';

        form.appendChild(operatorGroup);
        form.appendChild(passcodeGroup);
        form.appendChild(submitBtn);

        content.appendChild(header);
        content.appendChild(form);
        modal.appendChild(content);

        return modal;
    }

    createAddonsModal() {
        const modal = document.createElement('div');
        modal.id = 'addons-modal';
        modal.className = 'modal hidden';

        const content = document.createElement('div');
        content.className = 'modal-content';

        const header = document.createElement('div');
        header.className = 'modal-header';

        const title = document.createElement('h2');
        title.textContent = 'Manage Addons';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        closeBtn.innerHTML = '&times;';

        header.appendChild(title);
        header.appendChild(closeBtn);

        const contentWrapper = document.createElement('div');
        contentWrapper.id = 'addons-content-wrapper';

        content.appendChild(header);
        content.appendChild(contentWrapper);
        modal.appendChild(content);

        return modal;
    }

    createHelpModal() {
        const modal = document.createElement('div');
        modal.id = 'help-modal';
        modal.className = 'modal hidden';

        const content = document.createElement('div');
        content.className = 'modal-content';
        content.style.maxWidth = '700px';

        const header = document.createElement('div');
        header.className = 'modal-header';

        const title = document.createElement('h2');
        title.innerHTML = '<i class="fas fa-question-circle"></i> Help & User Guide';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        closeBtn.innerHTML = '&times;';

        header.appendChild(title);
        header.appendChild(closeBtn);

        const helpContent = document.createElement('div');
        helpContent.innerHTML = `
            <div style="max-height: 400px; overflow-y: auto;">
                <h3 style="color: var(--highlight-color); margin-bottom: 1rem;">Getting Started</h3>
                
                <h4 style="margin: 1rem 0 0.5rem 0;">Panel Overview</h4>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li><strong>Visual Feed:</strong> Displays rotating background images with titles</li>
                    <li><strong>Programs & Collaboration:</strong> Access system tools and applications</li>
                    <li><strong>Logistics & Fleet:</strong> Monitor warehouse and shipping operations</li>
                    <li><strong>Security & Support:</strong> Manage security, IT support, and dock operations</li>
                </ul>

                <h4 style="margin: 1rem 0 0.5rem 0;">Quick Actions</h4>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li><strong>Theme Toggle:</strong> Switch between dark and light modes</li>
                    <li><strong>Settings:</strong> Configure system preferences</li>
                    <li><strong>Login:</strong> Access authentication console</li>
                    <li><strong>Addons:</strong> Manage browser extensions and tools</li>
                </ul>

                <h4 style="margin: 1rem 0 0.5rem 0;">System Status</h4>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li><strong>Status Indicators:</strong> Green = Active, Orange = Ready, Blue = Monitoring</li>
                    <li><strong>Uptime Counter:</strong> Shows system operational time in footer</li>
                    <li><strong>Real-time Clock:</strong> Displays current date and time</li>
                </ul>

                <h4 style="margin: 1rem 0 0.5rem 0;">Keyboard Shortcuts</h4>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li><strong>Esc:</strong> Close any open modal</li>
                    <li><strong>Click outside:</strong> Close modal windows</li>
                </ul>

                <div style="background: rgba(255, 115, 0, 0.1); padding: 1rem; margin: 1rem 0; border-left: 4px solid var(--highlight-color);">
                    <strong>Need Support?</strong><br>
                    Contact system administrator or use the Issue Tracker for bug reports and technical support.
                </div>
            </div>
        `;

        content.appendChild(header);
        content.appendChild(helpContent);
        modal.appendChild(content);

        return modal;
    }

    createAboutModal() {
        const modal = document.createElement('div');
        modal.id = 'about-modal';
        modal.className = 'modal hidden';

        const content = document.createElement('div');
        content.className = 'modal-content';
        content.style.maxWidth = '600px';

        const header = document.createElement('div');
        header.className = 'modal-header';

        const title = document.createElement('h2');
        title.innerHTML = '<i class="fas fa-info-circle"></i> About Command Center';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        closeBtn.innerHTML = '&times;';

        header.appendChild(title);
        header.appendChild(closeBtn);

        const aboutContent = document.createElement('div');
        const currentYear = new Date().getFullYear();
        aboutContent.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <div style="font-size: 3rem; color: var(--highlight-color); margin-bottom: 1rem;">
                    <i class="fas fa-desktop"></i>
                </div>
                <h3 style="color: var(--highlight-color);">Command Center Dashboard</h3>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">Version 2.1.0</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--highlight-color); margin-bottom: 0.5rem;">Description</h4>
                <p style="line-height: 1.6; margin-bottom: 1rem;">
                    A comprehensive operational dashboard designed for logistics, fleet management, 
                    and warehouse operations. Built with modern web technologies to provide real-time 
                    monitoring and control capabilities.
                </p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--highlight-color); margin-bottom: 0.5rem;">Key Features</h4>
                <ul style="margin-left: 1.5rem; line-height: 1.6;">
                    <li>Real-time system monitoring</li>
                    <li>Integrated logistics management</li>
                    <li>Fleet tracking and coordination</li>
                    <li>Security and access control</li>
                    <li>Customizable themes (Dark/Light)</li>
                    <li>Responsive design for all devices</li>
                </ul>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--highlight-color); margin-bottom: 0.5rem;">Technology Stack</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-family: monospace; font-size: 0.9rem;">
                    <div>• JavaScript ES6+</div>
                    <div>• CSS3 Grid & Flexbox</div>
                    <div>• HTML5</div>
                    <div>• Font Awesome Icons</div>
                    <div>• JetBrains Mono Font</div>
                    <div>• Responsive Design</div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                <p style="color: var(--text-muted); font-size: 0.9rem;">
                    © ${currentYear} Command Center Dashboard<br>
                    Built for operational excellence
                </p>
            </div>
        `;

        content.appendChild(header);
        content.appendChild(aboutContent);
        modal.appendChild(content);

        return modal;
    }

    createFooter() {
        const footer = document.createElement('div');
        footer.className = 'app-footer';

        // Left section - Copyright
        const leftSection = document.createElement('div');
        leftSection.className = 'footer-left';

        const copyright = document.createElement('span');
        copyright.className = 'footer-copyright';
        const currentYear = new Date().getFullYear();
        copyright.innerHTML = `© ${currentYear} <a href="#" class="footer-link">Command Center</a>`;
        leftSection.appendChild(copyright);

        // Center section - System status
        const centerSection = document.createElement('div');
        centerSection.className = 'footer-center';

        const statusDiv = document.createElement('div');
        statusDiv.className = 'footer-status';
        statusDiv.innerHTML = '<span class="status-indicator"></span>System Online';

        const versionSpan = document.createElement('span');
        versionSpan.textContent = 'v2.1.0';
        versionSpan.style.color = 'var(--text-muted)';

        const uptimeSpan = document.createElement('span');
        uptimeSpan.id = 'uptime-display';
        uptimeSpan.textContent = 'Uptime: 00:00:00';
        uptimeSpan.style.color = 'var(--text-muted)';

        centerSection.appendChild(statusDiv);
        centerSection.appendChild(versionSpan);
        centerSection.appendChild(uptimeSpan);

        // Right section - Links
        const rightSection = document.createElement('div');
        rightSection.className = 'footer-right';

        const helpLink = document.createElement('a');
        helpLink.href = '#';
        helpLink.id = 'help-link';
        helpLink.className = 'footer-link';
        helpLink.innerHTML = '<i class="fas fa-question-circle"></i> Help';

        const aboutLink = document.createElement('a');
        aboutLink.href = '#';
        aboutLink.id = 'about-link';
        aboutLink.className = 'footer-link';
        aboutLink.innerHTML = '<i class="fas fa-info-circle"></i> About';

        rightSection.appendChild(helpLink);
        rightSection.appendChild(aboutLink);

        footer.appendChild(leftSection);
        footer.appendChild(centerSection);
        footer.appendChild(rightSection);

        return footer;
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Login modal
        const loginToggle = document.getElementById('login-toggle');
        const loginModal = document.getElementById('login-modal');
        const loginCloseBtn = loginModal?.querySelector('.modal-close-btn');
        const loginForm = document.getElementById('login-form');

        if (loginToggle) {
            loginToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('login-modal');
            });
        }

        if (loginCloseBtn) {
            loginCloseBtn.addEventListener('click', () => {
                this.closeModal('login-modal');
            });
        }

        if (loginModal) {
            loginModal.addEventListener('click', (e) => {
                if (e.target === loginModal) {
                    this.closeModal('login-modal');
                }
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const operatorId = document.getElementById('operator-id').value;
                console.log(`Authentication attempt for Operator ID: ${operatorId}`);
                this.closeModal('login-modal');
                loginForm.reset();
            });
        }

        // Addons modal
        const addonsToggle = document.getElementById('addons-toggle');
        const addonsModal = document.getElementById('addons-modal');
        const addonsCloseBtn = addonsModal?.querySelector('.modal-close-btn');

        if (addonsToggle) {
            addonsToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.openAddonsModal();
            });
        }

        if (addonsCloseBtn) {
            addonsCloseBtn.addEventListener('click', () => {
                this.closeModal('addons-modal');
            });
        }

        if (addonsModal) {
            addonsModal.addEventListener('click', (e) => {
                if (e.target === addonsModal) {
                    this.closeModal('addons-modal');
                }
            });
        }

        // Help modal
        const helpLink = document.getElementById('help-link');
        const helpModal = document.getElementById('help-modal');
        const helpCloseBtn = helpModal?.querySelector('.modal-close-btn');

        if (helpLink) {
            helpLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('help-modal');
            });
        }

        if (helpCloseBtn) {
            helpCloseBtn.addEventListener('click', () => {
                this.closeModal('help-modal');
            });
        }

        if (helpModal) {
            helpModal.addEventListener('click', (e) => {
                if (e.target === helpModal) {
                    this.closeModal('help-modal');
                }
            });
        }

        // About modal
        const aboutLink = document.getElementById('about-link');
        const aboutModal = document.getElementById('about-modal');
        const aboutCloseBtn = aboutModal?.querySelector('.modal-close-btn');

        if (aboutLink) {
            aboutLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('about-modal');
            });
        }

        if (aboutCloseBtn) {
            aboutCloseBtn.addEventListener('click', () => {
                this.closeModal('about-modal');
            });
        }

        if (aboutModal) {
            aboutModal.addEventListener('click', (e) => {
                if (e.target === aboutModal) {
                    this.closeModal('about-modal');
                }
            });
        }

        // Global escape key handler for all modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal('login-modal');
                this.closeModal('addons-modal');
                this.closeModal('help-modal');
                this.closeModal('about-modal');
            }
        });
    }

    initializeFeatures() {
        // Apply saved theme
        this.applyTheme(localStorage.getItem('theme') || 'dark');

        // Initialize carousel
        this.initializeCarousel();

        // Initialize clock and date display
        this.updateClock();
        this.clockInterval = setInterval(() => this.updateClock(), 1000);

        // Initialize console clock (in cards)
        this.updateConsoleClock();
        this.consoleClockInterval = setInterval(() => this.updateConsoleClock(), 1000);

        // Initialize uptime counter
        this.updateUptime();
        this.uptimeInterval = setInterval(() => this.updateUptime(), 1000);
    }

    toggleTheme() {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    applyTheme(theme) {
        const htmlElement = document.documentElement;
        const themeStatus = document.getElementById('theme-status');
        const themeIcon = document.querySelector('#theme-toggle .card-icon');

        htmlElement.setAttribute('theme', theme);
        if (themeStatus) {
            themeStatus.textContent = `${theme.toUpperCase()} MODE`;
        }

        // Update theme toggle icon
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-moon card-icon';
            } else {
                themeIcon.className = 'fas fa-sun card-icon';
            }
        }

        // Update carousel images for new theme
        this.updateCarouselImages(theme);

        localStorage.setItem('theme', theme);
    }

    updateClock() {
        const timeElement = document.getElementById('time-display');
        const dateElement = document.getElementById('date-display');

        if (!timeElement || !dateElement) return;

        const polishMonths = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];
        const now = new Date();

        // Czas
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;

        // Data
        const day = String(now.getDate()).padStart(2, '0');
        const month = polishMonths[now.getMonth()];
        const year = now.getFullYear();
        dateElement.textContent = `${day} ${month} ${year}`;
    }

    initializeCarousel() {
        const carouselInner = document.getElementById('carousel-inner');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const dotIndicatorsContainer = document.getElementById('dot-indicators');

        if (!carouselInner || !prevBtn || !nextBtn || !dotIndicatorsContainer) return;

        const totalItems = appData.visualFeed.items.length;

        // Utwórz wskaźniki kropek
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('button');
            dot.style.cssText = `
                width: 50px;
                height: 5px;
                border-radius: 0%;
                border: 1px solid var(--highlight-color);
                background: transparent;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', () => {
                this.goToSlide(i);
                this.resetAutoSlide();
            });
            dotIndicatorsContainer.appendChild(dot);
        }

        const dots = dotIndicatorsContainer.querySelectorAll('button');

        // Funkcja do aktualizacji karuzeli i wskaźników
        this.updateCarousel = () => {
            carouselInner.style.transform = `translateX(-${this.currentFeedIndex * 100 / totalItems}%)`;
            dots.forEach((dot, index) => {
                if (index === this.currentFeedIndex) {
                    dot.style.backgroundColor = 'var(--highlight-color)';
                } else {
                    dot.style.backgroundColor = 'transparent';
                }
            });
        };

        // Funkcja do przechodzenia do konkretnego slajdu
        this.goToSlide = (index) => {
            this.currentFeedIndex = index;
            this.updateCarousel();
        };

        // Nawigacja
        nextBtn.addEventListener('click', () => {
            this.currentFeedIndex = (this.currentFeedIndex + 1) % totalItems;
            this.updateCarousel();
            this.resetAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            this.currentFeedIndex = (this.currentFeedIndex - 1 + totalItems) % totalItems;
            this.updateCarousel();
            this.resetAutoSlide();
        });

        // Hover effects for buttons
        prevBtn.addEventListener('mouseenter', () => {
            prevBtn.style.backgroundColor = 'rgba(255, 115, 0, 0.2)';
        });
        prevBtn.addEventListener('mouseleave', () => {
            prevBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });

        nextBtn.addEventListener('mouseenter', () => {
            nextBtn.style.backgroundColor = 'rgba(255, 115, 0, 0.2)';
        });
        nextBtn.addEventListener('mouseleave', () => {
            nextBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });

        // Funkcja do resetowania automatycznego przewijania
        this.resetAutoSlide = () => {
            if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
            }
            this.autoSlideInterval = setInterval(() => {
                this.currentFeedIndex = (this.currentFeedIndex + 1) % totalItems;
                this.updateCarousel();
            }, 5000);
        };

        // Inicjalizacja
        this.updateCarousel();
        this.resetAutoSlide();
    }

    updateCarouselImages(theme) {
        const carouselItems = document.querySelectorAll('.carousel-item');

        carouselItems.forEach((item, index) => {
            const itemData = appData.visualFeed.items[index];
            if (itemData) {
                const imageUrl = theme === 'dark' ? itemData.darkImage : itemData.lightImage;

                // Update blur layer
                const blurLayer = item.querySelector('div:first-child');
                if (blurLayer) {
                    blurLayer.style.backgroundImage = `url('${imageUrl}')`;
                }

                // Update main image layer
                const mainImageLayer = item.querySelector('div:nth-child(2)');
                if (mainImageLayer) {
                    mainImageLayer.style.backgroundImage = `url('${imageUrl}')`;
                }
            }
        });
    }

    updateUptime() {
        const uptimeElement = document.getElementById('uptime-display');
        if (!uptimeElement) return;

        const uptime = Date.now() - this.startTime;
        const hours = Math.floor(uptime / (1000 * 60 * 60));
        const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((uptime % (1000 * 60)) / 1000);

        const formatTime = (time) => time.toString().padStart(2, '0');
        uptimeElement.textContent = `Uptime: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    updateConsoleClock() {
        const clockElement = document.getElementById('clock');
        if (!clockElement) return;

        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        const dateString = now.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
        clockElement.innerHTML = `${dateString} &mdash; ${timeString}`;
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    openAddonsModal() {
        const addonsModal = document.getElementById('addons-modal');
        const addonsContentWrapper = document.getElementById('addons-content-wrapper');

        if (!addonsModal || !addonsContentWrapper) return;

        addonsModal.classList.remove('hidden');

        if (this.areAddonsLoaded) return;

        // Show spinner while loading
        addonsContentWrapper.innerHTML = '<div class="spinner"></div>';

        // Dynamically load the addons script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/skokivPr/sites@refs/heads/main/addons.js';

        script.onload = () => {
            console.log("Addons script loaded successfully.");
            this.areAddonsLoaded = true;
            this.renderAddons();
        };

        script.onerror = () => {
            console.error("Failed to load addons script.");
            addonsContentWrapper.innerHTML = '<p>Error: Could not load extensions.</p>';
        };

        document.body.appendChild(script);
    }

    renderAddons() {
        const addonsContentWrapper = document.getElementById('addons-content-wrapper');
        if (!addonsContentWrapper || !window.addonsUtils) {
            if (addonsContentWrapper) addonsContentWrapper.innerHTML = '<p>Error: Could not display addons.</p>';
            return;
        }

        addonsContentWrapper.innerHTML = ''; // Clear spinner
        const grid = document.createElement('div');
        grid.id = 'addons-grid';

        const recommendations = window.addonsUtils.getRecommendations();
        const currentBrowser = window.addonsUtils.getBrowserName();

        recommendations.forEach(addon => {
            const isAvailable = addon.browsers[currentBrowser];

            const card = document.createElement('a');
            card.href = '#';
            card.className = 'addon-card';
            if (!isAvailable) {
                card.classList.add('unavailable');
            }

            card.innerHTML = `
              <img src="${addon.icon}" alt="${addon.name} icon" class="addon-icon">
              <h3>${addon.name}</h3>
              <p>${addon.description}</p>
          `;

            card.addEventListener('click', (e) => {
                e.preventDefault();
                if (isAvailable) {
                    window.addonsUtils.openAddon(addon.name, currentBrowser);
                }
            });
            grid.appendChild(card);
        });

        addonsContentWrapper.appendChild(grid);
    }

    destroy() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
        if (this.clockInterval) {
            clearInterval(this.clockInterval);
        }
        if (this.consoleClockInterval) {
            clearInterval(this.consoleClockInterval);
        }
        if (this.uptimeInterval) {
            clearInterval(this.uptimeInterval);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.commandCenter = new CommandCenter();
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (window.commandCenter) {
        window.commandCenter.destroy();
    }
});

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CommandCenter;
}
