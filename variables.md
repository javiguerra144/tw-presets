# Variables

## Foundations

### Global colors

#### Neutral black/white

Use black/white for main text color, specifically in headline and body copy. Alpha options can be used for elements like modal overlay & gallery controls.

#### Neutral gray

Gray is a neutral color and can be used for text, borders, and icons. Most text should either be black or darker shades of gray, with some additional shades of dark gray for content hierarchy. Follow contrast accessibility requirements when considering anything but black or gray text on light/white backgrounds.

#### Primary

This is the brand color and is used for primary actions, like buttons and key elements. The primary color also highlights the main actions on the page.

#### Info

Use info colors to communicate informative status or message.

#### Success

Success colors communicate a positive action or successful situation. An action must have been successful and without problems.

#### Warning

This can be used for warning, urgency or attention needed. Warning colors can communicate minor problems that are not important at first, but could later cause an error or that progress is impeded.

#### Danger

Danger colors can be used to present negative/important information or actions that are destructive or block workflow.

#### Advertising

Use for promotional elements like banners, sales highlights, or marketing visuals.

### Theme

#### Surface

Surface colors are essential for defining the primary background of key UI components such as sections, cards, app backgrounds, and modals.
These are designed to be neutral or subtle, enhancing readability and reducing visual clutter while maintaining consistency across different parts of the application.

| **Token**           | **Purpose**                        | **Example Use Cases**                         |
| ------------------- | ---------------------------------- | --------------------------------------------- |
| `--surface-base`    | Primary background layer.          | Application backgrounds, foundational layers. |
| `--surface-content` | Main content surface.              | Cards, panels, list items, inputs.            |
| `--surface-raised`  | Elevated or prominent elements.    | Floating cards, buttons, toolbars.            |
| `--surface-overlay` | Highest-priority overlay surfaces. | Modals, dropdowns, popovers, loaders.         |

#### Backgrounds

Background colors are foundational for defining the overall look and feel of the interface. They are applied to various UI elements such as panels, toolbars, and containers to create a sense of depth and structure. These colors help differentiate different sections of the interface, guiding the user’s attention and improving navigation.

| **Token Name**                                 | **Purpose**                                                   |
| ---------------------------------------------- | ------------------------------------------------------------- |
| **`--background-neutral-base`**                | Default neutral background color.                             |
| **`--background-neutral-hover`**               | Neutral background color when hovered over.                   |
| **`--background-neutral-active`**              | Neutral background color when active or pressed.              |
| **`--background-neutral-focus`**               | Neutral background color when focused.                        |
| **`--background-neutral-disabled`**            | Neutral background color when disabled or inactive.           |
| **`--background-neutral-subtle`**              | Subtle variation of neutral background for less emphasis.     |
| **`--background-neutral-subtle-hover`**        | Subtle neutral background color for hover state.              |
| **`--background-neutral-subtle-active`**       | Subtle neutral background color for active state.             |
| **`--background-neutral-subtle-focus`**        | Subtle neutral background color for focus state.              |
| **`--background-neutral-subtle-disabled`**     | Subtle neutral background color for disabled state.           |
| **`--background-neutral-bold`**                | Bold variation of neutral background for stronger emphasis.   |
| **`--background-neutral-bold-hover`**          | Bold neutral background color for hover state.                |
| **`--background-neutral-bold-active`**         | Bold neutral background color for active state.               |
| **`--background-neutral-bold-focus`**          | Bold neutral background color for focus state.                |
| **`--background-neutral-bold-disabled`**       | Bold neutral background color for disabled state.             |
| **`--background-primary-base`**                | Default primary background color.                             |
| **`--background-primary-hover`**               | Primary background color when hovered over.                   |
| **`--background-primary-active`**              | Primary background color when active or pressed.              |
| **`--background-primary-focus`**               | Primary background color when focused.                        |
| **`--background-primary-disabled`**            | Primary background color when disabled or inactive.           |
| **`--background-primary-subtle`**              | Subtle variation of primary background for less emphasis.     |
| **`--background-primary-subtle-hover`**        | Subtle primary background color for hover state.              |
| **`--background-primary-subtle-active`**       | Subtle primary background color for active state.             |
| **`--background-primary-subtle-focus`**        | Subtle primary background color for focus state.              |
| **`--background-primary-subtle-disabled`**     | Subtle primary background color for disabled state.           |
| **`--background-primary-bold`**                | Bold variation of primary background for stronger emphasis.   |
| **`--background-primary-bold-hover`**          | Bold primary background color for hover state.                |
| **`--background-primary-bold-active`**         | Bold primary background color for active state.               |
| **`--background-primary-bold-focus`**          | Bold primary background color for focus state.                |
| **`--background-primary-bold-disabled`**       | Bold primary background color for disabled state.             |
| **`--background-secondary-base`**              | Default secondary background color.                           |
| **`--background-secondary-hover`**             | Secondary background color when hovered over.                 |
| **`--background-secondary-active`**            | Secondary background color when active or pressed.            |
| **`--background-secondary-focus`**             | Secondary background color when focused.                      |
| **`--background-secondary-disabled`**          | Secondary background color when disabled or inactive.         |
| **`--background-secondary-subtle`**            | Subtle variation of secondary background for less emphasis.   |
| **`--background-secondary-subtle-hover`**      | Subtle secondary background color for hover state.            |
| **`--background-secondary-subtle-active`**     | Subtle secondary background color for active state.           |
| **`--background-secondary-subtle-focus`**      | Subtle secondary background color for focus state.            |
| **`--background-secondary-subtle-disabled`**   | Subtle secondary background color for disabled state.         |
| **`--background-secondary-bold`**              | Bold variation of secondary background for stronger emphasis. |
| **`--background-secondary-bold-hover`**        | Bold secondary background color for hover state.              |
| **`--background-secondary-bold-active`**       | Bold secondary background color for active state.             |
| **`--background-secondary-bold-focus`**        | Bold secondary background color for focus state.              |
| **`--background-secondary-bold-disabled`**     | Bold secondary background color for disabled state.           |
| **`--background-selected-base`**               | Default background color for selected elements.               |
| **`--background-selected-hover`**              | Hover background for selected elements.                       |
| **`--background-selected-active`**             | Active background for selected elements.                      |
| **`--background-selected-focus`**              | Focus background for selected elements.                       |
| **`--background-selected-disabled`**           | Disabled background for selected elements.                    |
| **`--background-selected-subtle`**             | Subtle background for selected elements.                      |
| **`--background-selected-subtle-hover`**       | Subtle hover background for selected elements.                |
| **`--background-selected-subtle-active`**      | Subtle active background for selected elements.               |
| **`--background-selected-subtle-focus`**       | Subtle focus background for selected elements.                |
| **`--background-selected-subtle-disabled`**    | Subtle disabled background for selected elements.             |
| **`--background-selected-bold`**               | Bold background for selected elements.                        |
| **`--background-selected-bold-hover`**         | Bold hover background for selected elements.                  |
| **`--background-selected-bold-active`**        | Bold active background for selected elements.                 |
| **`--background-selected-bold-focus`**         | Bold focus background for selected elements.                  |
| **`--background-selected-bold-disabled`**      | Bold disabled background for selected elements.               |
| **`--background-info-base`**                   | Default background color for informational elements.          |
| **`--background-info-hover`**                  | Hover background for informational elements.                  |
| **`--background-info-active`**                 | Active background for informational elements.                 |
| **`--background-info-focus`**                  | Focus background for informational elements.                  |
| **`--background-info-disabled`**               | Disabled background for informational elements.               |
| **`--background-info-subtle`**                 | Subtle background for informational elements.                 |
| **`--background-info-subtle-hover`**           | Subtle hover background for informational elements.           |
| **`--background-info-subtle-active`**          | Subtle active background for informational elements.          |
| **`--background-info-subtle-focus`**           | Subtle focus background for informational elements.           |
| **`--background-info-subtle-disabled`**        | Subtle disabled background for informational elements.        |
| **`--background-info-bold`**                   | Bold background for informational elements.                   |
| **`--background-info-bold-hover`**             | Bold hover background for informational elements.             |
| **`--background-info-bold-active`**            | Bold active background for informational elements.            |
| **`--background-info-bold-focus`**             | Bold focus background for informational elements.             |
| **`--background-info-bold-disabled`**          | Bold disabled background for informational elements.          |
| **`--background-success-base`**                | Default background for success elements.                      |
| **`--background-success-hover`**               | Hover background for success elements.                        |
| **`--background-success-active`**              | Active background for success elements.                       |
| **`--background-success-focus`**               | Focus background for success elements.                        |
| **`--background-success-disabled`**            | Disabled background for success elements.                     |
| **`--background-success-subtle`**              | Subtle background for success elements.                       |
| **`--background-success-subtle-hover`**        | Subtle hover background for success elements.                 |
| **`--background-success-subtle-active`**       | Subtle active background for success elements.                |
| **`--background-success-subtle-focus`**        | Subtle focus background for success elements.                 |
| **`--background-success-subtle-disabled`**     | Subtle disabled background for success elements.              |
| **`--background-success-bold`**                | Bold background for success elements.                         |
| **`--background-success-bold-hover`**          | Bold hover background for success elements.                   |
| **`--background-success-bold-active`**         | Bold active background for success elements.                  |
| **`--background-success-bold-focus`**          | Bold focus background for success elements.                   |
| **`--background-success-bold-disabled`**       | Bold disabled background for success elements.                |
| **`--background-warning-base`**                | Default background for warning elements.                      |
| **`--background-warning-hover`**               | Hover background for warning elements.                        |
| **`--background-warning-active`**              | Active background for warning elements.                       |
| **`--background-warning-focus`**               | Focus background for warning elements.                        |
| **`--background-warning-disabled`**            | Disabled background for warning elements.                     |
| **`--background-warning-subtle`**              | Subtle background for warning elements.                       |
| **`--background-warning-subtle-hover`**        | Subtle hover background for warning elements.                 |
| **`--background-warning-subtle-active`**       | Subtle active background for warning elements.                |
| **`--background-warning-subtle-focus`**        | Subtle focus background for warning elements.                 |
| **`--background-warning-subtle-disabled`**     | Subtle disabled background for warning elements.              |
| **`--background-warning-bold`**                | Bold background for warning elements.                         |
| **`--background-warning-bold-hover`**          | Bold hover background for warning elements.                   |
| **`--background-warning-bold-active`**         | Bold active background for warning elements.                  |
| **`--background-warning-bold-focus`**          | Bold focus background for warning elements.                   |
| **`--background-warning-bold-disabled`**       | Bold disabled background for warning elements.                |
| **`--background-danger-base`**                 | Default background for danger elements.                       |
| **`--background-danger-hover`**                | Hover background for danger elements.                         |
| **`--background-danger-active`**               | Active background for danger elements.                        |
| **`--background-danger-focus`**                | Focus background for danger elements.                         |
| **`--background-danger-disabled`**             | Disabled background for danger elements.                      |
| **`--background-danger-subtle`**               | Subtle background for danger elements.                        |
| **`--background-danger-subtle-hover`**         | Subtle hover background for danger elements.                  |
| **`--background-danger-subtle-active`**        | Subtle active background for danger elements.                 |
| **`--background-danger-subtle-focus`**         | Subtle focus background for danger elements.                  |
| **`--background-danger-subtle-disabled`**      | Subtle disabled background for danger elements.               |
| **`--background-danger-bold`**                 | Bold background for danger elements.                          |
| **`--background-danger-bold-hover`**           | Bold hover background for danger elements.                    |
| **`--background-danger-bold-active`**          | Bold active background for danger elements.                   |
| **`--background-danger-bold-focus`**           | Bold focus background for danger elements.                    |
| **`--background-danger-bold-disabled`**        | Bold disabled background for danger elements.                 |
| **`--background-advertising-base`**            | Default background for advertising elements.                  |
| **`--background-advertising-hover`**           | Hover background for advertising elements.                    |
| **`--background-advertising-active`**          | Active background for advertising elements.                   |
| **`--background-advertising-focus`**           | Focus background for advertising elements.                    |
| **`--background-advertising-disabled`**        | Disabled background for advertising elements.                 |
| **`--background-advertising-subtle`**          | Subtle background for advertising elements.                   |
| **`--background-advertising-subtle-hover`**    | Subtle hover background for advertising elements.             |
| **`--background-advertising-subtle-active`**   | Subtle active background for advertising elements.            |
| **`--background-advertising-subtle-focus`**    | Subtle focus background for advertising elements.             |
| **`--background-advertising-subtle-disabled`** | Subtle disabled background for advertising elements.          |
| **`--background-advertising-bold`**            | Bold background for advertising elements.                     |
| **`--background-advertising-bold-hover`**      | Bold hover background for advertising elements.               |
| **`--background-advertising-bold-active`**     | Bold active background for advertising elements.              |
| **`--background-advertising-bold-focus`**      | Bold focus background for advertising elements.               |
| **`--background-advertising-bold-disabled`**   | Bold disabled background for advertising elements.            |
| **`--background-overlay`**                     | Overlay background color.                                     |

#### Icons

These colors are selected to ensure that icons are immediately recognizable and stand out against different backgrounds.

| **Token Name**                    | **Purpose**                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------- |
| **`--icon-base`**                 | Default icon color for general use, typically neutral or primary-themed.               |
| **`--icon-hover`**                | Color for icons in a hover state, providing visual feedback.                           |
| **`--icon-active`**               | Color for icons in an active or pressed state.                                         |
| **`--icon-focus`**                | Color for icons when focused, ensuring accessibility compliance.                       |
| **`--icon-disabled`**             | Muted color for icons that are unavailable or inactive.                                |
| **`--icon-inverse`**              | Icon color for use on dark or inverted surfaces.                                       |
| **`--icon-primary`**              | Default color for primary icons, reflecting the main brand color.                      |
| **`--icon-primary-hover`**        | Hover state color for primary icons.                                                   |
| **`--icon-primary-active`**       | Active or pressed state color for primary icons.                                       |
| **`--icon-primary-focus`**        | Focus state color for primary icons, ensuring accessibility.                           |
| **`--icon-primary-disabled`**     | Disabled state color for primary icons, muted to indicate inactivity.                  |
| **`--icon-primary-inverse`**      | Color for primary icons on dark or inverted backgrounds.                               |
| **`--icon-secondary`**            | Default color for secondary icons, reflecting secondary brand elements.                |
| **`--icon-secondary-hover`**      | Hover state color for secondary icons.                                                 |
| **`--icon-secondary-active`**     | Active or pressed state color for secondary icons.                                     |
| **`--icon-secondary-focus`**      | Focus state color for secondary icons.                                                 |
| **`--icon-secondary-disabled`**   | Disabled state color for secondary icons.                                              |
| **`--icon-secondary-inverse`**    | Color for secondary icons on dark or inverted backgrounds.                             |
| **`--icon-neutral`**              | Default neutral color for general-purpose icons.                                       |
| **`--icon-neutral-hover`**        | Hover state color for neutral icons.                                                   |
| **`--icon-neutral-active`**       | Active or pressed state color for neutral icons.                                       |
| **`--icon-neutral-focus`**        | Focus state color for neutral icons.                                                   |
| **`--icon-neutral-disabled`**     | Disabled state color for neutral icons.                                                |
| **`--icon-neutral-inverse`**      | Color for neutral icons on dark or inverted backgrounds.                               |
| **`--icon-info`**                 | Default color for informational icons, used to provide context or feedback.            |
| **`--icon-info-hover`**           | Hover state color for informational icons.                                             |
| **`--icon-info-active`**          | Active or pressed state color for informational icons.                                 |
| **`--icon-info-focus`**           | Focus state color for informational icons.                                             |
| **`--icon-info-disabled`**        | Disabled state color for informational icons.                                          |
| **`--icon-info-inverse`**         | Color for informational icons on dark or inverted backgrounds.                         |
| **`--icon-success`**              | Default color for success icons, indicating positive or completed states.              |
| **`--icon-success-hover`**        | Hover state color for success icons.                                                   |
| **`--icon-success-active`**       | Active or pressed state color for success icons.                                       |
| **`--icon-success-focus`**        | Focus state color for success icons.                                                   |
| **`--icon-success-disabled`**     | Disabled state color for success icons.                                                |
| **`--icon-success-inverse`**      | Color for success icons on dark or inverted backgrounds.                               |
| **`--icon-warning`**              | Default color for warning icons, highlighting cautionary or attention-required states. |
| **`--icon-warning-hover`**        | Hover state color for warning icons.                                                   |
| **`--icon-warning-active`**       | Active or pressed state color for warning icons.                                       |
| **`--icon-warning-focus`**        | Focus state color for warning icons.                                                   |
| **`--icon-warning-disabled`**     | Disabled state color for warning icons.                                                |
| **`--icon-warning-inverse`**      | Color for warning icons on dark or inverted backgrounds.                               |
| **`--icon-danger`**               | Default color for danger icons, indicating errors or critical states.                  |
| **`--icon-danger-hover`**         | Hover state color for danger icons.                                                    |
| **`--icon-danger-active`**        | Active or pressed state color for danger icons.                                        |
| **`--icon-danger-focus`**         | Focus state color for danger icons.                                                    |
| **`--icon-danger-disabled`**      | Disabled state color for danger icons.                                                 |
| **`--icon-danger-inverse`**       | Color for danger icons on dark or inverted backgrounds.                                |
| **`--icon-advertising`**          | Default color for advertising or promotional icons.                                    |
| **`--icon-advertising-hover`**    | Hover state color for advertising icons.                                               |
| **`--icon-advertising-active`**   | Active or pressed state color for advertising icons.                                   |
| **`--icon-advertising-focus`**    | Focus state color for advertising icons.                                               |
| **`--icon-advertising-disabled`** | Disabled state color for advertising icons.                                            |
| **`--icon-advertising-inverse`**  | Color for advertising icons on dark or inverted backgrounds.                           |

#### Borders

Border colors are used to define the edges of UI elements, such as buttons, input fields, and containers. These colors help in visually separating different components and adding structure to the layout. These can vary in intensity to indicate interactive states, such as focus or error.

| **Token Name**                           | **Purpose**                                                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **`--border-base`**                      | Default border color for general use, providing subtle separation or structure.                                         |
| **`--border-base-subtle`**               | A lighter variation of `--border-base`, used for very subtle separations.                                               |
| **`--border-base-bold`**                 | A stronger variation of `--border-base`, used for more prominent separations.                                           |
| **`--border-inverse`**                   | A reverse border color, typically used on dark or inverted surfaces.                                                    |
| **`--border-inverse-subtle`**            | A lighter variation of `--border-inverse`, suitable for subtle contrasts on dark surfaces.                              |
| **`--border-inverse-bold`**              | A stronger variation of `--border-inverse`, for prominent contrasts on dark surfaces.                                   |
| **`--border-hover`**                     | Border color to indicate hover interaction on neutral elements.                                                         |
| **`--border-hover-subtle`**              | A lighter variation of `--border-hover`, for subtle hover interactions.                                                 |
| **`--border-hover-bold`**                | A stronger variation of `--border-hover`, for noticeable hover effects.                                                 |
| **`--border-focus`**                     | Border color to highlight an element when focused for accessibility and interaction feedback.                           |
| **`--border-focus-subtle`**              | A lighter variation of `--border-focus`, providing a softer focus effect.                                               |
| **`--border-focus-bold`**                | A stronger variation of `--border-focus`, ensuring high visibility during focus.                                        |
| **`--border-active`**                    | Border color to indicate an element is currently active or pressed.                                                     |
| **`--border-active-subtle`**             | A lighter variation of `--border-active`, for subtle active states.                                                     |
| **`--border-active-bold`**               | A stronger variation of `--border-active`, for more prominent active states.                                            |
| **`--border-disabled`**                  | Muted border color for elements that are inactive or unavailable.                                                       |
| **`--border-disabled-subtle`**           | A lighter variation of `--border-disabled`, ensuring minimal visual impact.                                             |
| **`--border-disabled-bold`**             | A stronger variation of `--border-disabled`, for clearer indication of disabled states.                                 |
| **`--border-primary`**                   | Default border color for primary elements, reflecting the main brand color.                                             |
| **`--border-primary-hover`**             | Border color for primary elements when hovered over.                                                                    |
| **`--border-primary-active`**            | Border color for primary elements when active or pressed.                                                               |
| **`--border-primary-focus`**             | Border color for primary elements when focused.                                                                         |
| **`--border-primary-subtle`**            | Subtle border color for primary elements, providing a lighter alternative.                                              |
| **`--border-primary-bold`**              | Bold border color for primary elements, offering a more prominent appearance.                                           |
| **`--border-primary-hover-subtle`**      | Subtle hover border color for primary elements.                                                                         |
| **`--border-primary-hover-bold`**        | Bold hover border color for primary elements.                                                                           |
| **`--border-primary-active-subtle`**     | Subtle active border color for primary elements.                                                                        |
| **`--border-primary-active-bold`**       | Bold active border color for primary elements.                                                                          |
| **`--border-primary-focus-subtle`**      | Subtle focus border color for primary elements.                                                                         |
| **`--border-primary-focus-bold`**        | Bold focus border color for primary elements.                                                                           |
| **`--border-secondary`**                 | Default border color for secondary elements, reflecting a secondary brand color or theme.                               |
| **`--border-secondary-hover`**           | Border color for secondary elements when hovered over.                                                                  |
| **`--border-secondary-active`**          | Border color for secondary elements when active or pressed.                                                             |
| **`--border-secondary-focus`**           | Border color for secondary elements when focused.                                                                       |
| **`--border-secondary-subtle`**          | Subtle border color for secondary elements.                                                                             |
| **`--border-secondary-bold`**            | Bold border color for secondary elements.                                                                               |
| **`--border-secondary-hover-subtle`**    | Subtle hover border color for secondary elements.                                                                       |
| **`--border-secondary-hover-bold`**      | Bold hover border color for secondary elements.                                                                         |
| **`--border-secondary-active-subtle`**   | Subtle active border color for secondary elements.                                                                      |
| **`--border-secondary-active-bold`**     | Bold active border color for secondary elements.                                                                        |
| **`--border-secondary-focus-subtle`**    | Subtle focus border color for secondary elements.                                                                       |
| **`--border-secondary-focus-bold`**      | Bold focus border color for secondary elements.                                                                         |
| **`--border-info`**                      | Default border color for informational elements, providing context or feedback.                                         |
| **`--border-info-hover`**                | Border color for informational elements when hovered over.                                                              |
| **`--border-info-active`**               | Border color for informational elements when active or pressed.                                                         |
| **`--border-info-focus`**                | Border color for informational elements when focused.                                                                   |
| **`--border-info-subtle`**               | Subtle border color for informational elements.                                                                         |
| **`--border-info-bold`**                 | Bold border color for informational elements.                                                                           |
| **`--border-info-hover-subtle`**         | Subtle hover border color for informational elements.                                                                   |
| **`--border-info-hover-bold`**           | Bold hover border color for informational elements.                                                                     |
| **`--border-info-active-subtle`**        | Subtle active border color for informational elements.                                                                  |
| **`--border-info-active-bold`**          | Bold active border color for informational elements.                                                                    |
| **`--border-info-focus-subtle`**         | Subtle focus border color for informational elements.                                                                   |
| **`--border-info-focus-bold`**           | Bold focus border color for informational elements.                                                                     |
| **`--border-success`**                   | Default border color for success elements, indicating positive or completed states.                                     |
| **`--border-success-hover`**             | Border color for success elements when hovered over.                                                                    |
| **`--border-success-active`**            | Border color for success elements when active or pressed.                                                               |
| **`--border-success-focus`**             | Border color for success elements when focused.                                                                         |
| **`--border-success-subtle`**            | Subtle border color for success elements.                                                                               |
| **`--border-success-bold`**              | Bold border color for success elements.                                                                                 |
| **`--border-success-hover-subtle`**      | Subtle hover border color for success elements.                                                                         |
| **`--border-success-hover-bold`**        | Bold hover border color for success elements.                                                                           |
| **`--border-success-active-subtle`**     | Subtle active border color for success elements.                                                                        |
| **`--border-success-active-bold`**       | Bold active border color for success elements.                                                                          |
| **`--border-success-focus-subtle`**      | Subtle focus border color for success elements.                                                                         |
| **`--border-success-focus-bold`**        | Bold focus border color for success elements.                                                                           |
| **`--border-warning`**                   | Default border color for warning elements, highlighting cautionary states.                                              |
| **`--border-warning-hover`**             | Border color for warning elements when hovered over.                                                                    |
| **`--border-warning-active`**            | Border color for warning elements when active or pressed.                                                               |
| **`--border-warning-focus`**             | Border color for warning elements when focused.                                                                         |
| **`--border-warning-subtle`**            | Subtle border color for warning elements.                                                                               |
| **`--border-warning-bold`**              | Bold border color for warning elements.                                                                                 |
| **`--border-warning-hover-subtle`**      | Subtle hover border color for warning elements.                                                                         |
| **`--border-warning-hover-bold`**        | Bold hover border color for warning elements.                                                                           |
| **`--border-warning-active-subtle`**     | Subtle active border color for warning elements.                                                                        |
| **`--border-warning-active-bold`**       | Bold active border color for warning elements.                                                                          |
| **`--border-warning-focus-subtle`**      | Subtle focus border color for warning elements.                                                                         |
| **`--border-warning-focus-bold`**        | Bold focus border color for warning elements.                                                                           |
| **`--border-danger`**                    | Default border color for danger elements, indicating errors or critical states.                                         |
| **`--border-danger-hover`**              | Border color for danger elements when hovered over.                                                                     |
| **`--border-danger-active`**             | Border color for danger elements when active or pressed.                                                                |
| **`--border-danger-focus`**              | Border color for danger elements when focused.                                                                          |
| **`--border-danger-subtle`**             | Subtle border color for danger elements.                                                                                |
| **`--border-danger-bold`**               | Bold border color for danger elements.                                                                                  |
| **`--border-danger-hover-subtle`**       | Subtle hover border color for danger elements.                                                                          |
| **`--border-danger-hover-bold`**         | Bold hover border color for danger elements.                                                                            |
| **`--border-danger-active-subtle`**      | Subtle active border color for danger elements.                                                                         |
| **`--border-danger-active-bold`**        | Bold active border color for danger elements.                                                                           |
| **`--border-danger-focus-subtle`**       | Subtle focus border color for danger elements.                                                                          |
| **`--border-danger-focus-bold`**         | Bold focus border color for danger elements.                                                                            |
| **`--border-advertising`**               | Default border color for advertising elements, indicating something new, such as onboarding or new feature information. |
| **`--border-advertising-hover`**         | Border color for advertising elements when hovered over.                                                                |
| **`--border-advertising-active`**        | Border color for advertising elements when active or pressed.                                                           |
| **`--border-advertising-focus`**         | Border color for advertising elements when focused.                                                                     |
| **`--border-advertising-subtle`**        | Subtle border color for advertising elements.                                                                           |
| **`--border-advertising-bold`**          | Bold border color for advertising elements.                                                                             |
| **`--border-advertising-hover-subtle`**  | Subtle hover border color for advertising elements.                                                                     |
| **`--border-advertising-hover-bold`**    | Bold hover border color for advertising elements.                                                                       |
| **`--border-advertising-active-subtle`** | Subtle active border color for advertising elements.                                                                    |
| **`--border-advertising-active-bold`**   | Bold active border color for advertising elements.                                                                      |
| **`--border-advertising-focus-subtle`**  | Subtle focus border color for advertising elements.                                                                     |
| **`--border-advertising-focus-bold`**    | Bold focus border color for advertising elements.                                                                       |
| **`--border-divider`**                   | Subtle border color used for separating content or sections.                                                            |
| **`--border-divider-subtle`**            | A lighter variation of `--border-divider`, for barely noticeable separators.                                            |
| **`--border-divider-bold`**              | A stronger variation of `--border-divider`, for highly visible section separators.                                      |

#### Texts

Text colors are critical for readability and accessibility, ensuring that all textual content is legible across various backgrounds.
The text color palette is designed to maintain high contrast ratios, adhering to accessibility standards to provide an inclusive user experience for all users.

| **Token Name**                       | **Purpose**                                                      |
| ------------------------------------ | ---------------------------------------------------------------- |
| **`--text-base`**                    | Default base text color used for main content or important text. |
| **`--text-base-inverted`**           | Base text color for dark or inverted backgrounds.                |
| **`--text-subtle`**                  | Subtle text color for less prominent content.                    |
| **`--text-subtle-inverted`**         | Subtle text color for dark or inverted backgrounds.              |
| **`--text-subtler`**                 | Subtler text color for subtle or de-emphasized text.             |
| **`--text-subtler-inverted`**        | Subtler text color for dark or inverted backgrounds.             |
| **`--text-primary-subtle`**          | Subtle primary text for de-emphasized or secondary content.      |
| **`--text-primary-base`**            | Default primary text color for regular content.                  |
| **`--text-primary-bold`**            | Bold primary text for emphasis.                                  |
| **`--text-primary-hover`**           | Primary text color for hover states.                             |
| **`--text-primary-active`**          | Primary text color for active or pressed states.                 |
| **`--text-primary-inverted`**        | Primary text color for inverted or dark backgrounds.             |
| **`--text-primary-selected`**        | Primary text color for selected states.                          |
| **`--text-primary-placeholder`**     | Primary text color for placeholders.                             |
| **`--text-primary-disabled`**        | Muted primary text for disabled or inactive states.              |
| **`--text-secondary-subtle`**        | Subtle secondary text for de-emphasized or secondary content.    |
| **`--text-secondary-base`**          | Default secondary text color for regular content.                |
| **`--text-secondary-bold`**          | Bold secondary text for emphasis.                                |
| **`--text-secondary-hover`**         | Secondary text color for hover states.                           |
| **`--text-secondary-active`**        | Secondary text color for active or pressed states.               |
| **`--text-secondary-inverted`**      | Secondary text color for inverted or dark backgrounds.           |
| **`--text-secondary-selected`**      | Secondary text color for selected states.                        |
| **`--text-secondary-placeholder`**   | Secondary text color for placeholders.                           |
| **`--text-secondary-disabled`**      | Muted secondary text for disabled or inactive states.            |
| **`--text-neutral-subtle`**          | Subtle neutral text for de-emphasized or secondary content.      |
| **`--text-neutral-base`**            | Default neutral text color for regular content.                  |
| **`--text-neutral-bold`**            | Bold neutral text for emphasis.                                  |
| **`--text-neutral-hover`**           | Neutral text color for hover states.                             |
| **`--text-neutral-active`**          | Neutral text color for active or pressed states.                 |
| **`--text-neutral-inverted`**        | Neutral text color for inverted or dark backgrounds.             |
| **`--text-neutral-selected`**        | Neutral text color for selected states.                          |
| **`--text-neutral-placeholder`**     | Neutral text color for placeholders.                             |
| **`--text-neutral-disabled`**        | Muted neutral text for disabled or inactive states.              |
| **`--text-info-subtle`**             | Subtle info text for secondary informational content.            |
| **`--text-info-base`**               | Default info text color for informational content.               |
| **`--text-info-bold`**               | Bold info text for emphasis or highlighted information.          |
| **`--text-info-hover`**              | Info text color for hover states.                                |
| **`--text-info-active`**             | Info text color for active or pressed states.                    |
| **`--text-info-inverted`**           | Info text color for inverted or dark backgrounds.                |
| **`--text-info-selected`**           | Info text color for selected states.                             |
| **`--text-info-placeholder`**        | Info text color for placeholders.                                |
| **`--text-info-disabled`**           | Muted info text color for disabled or inactive states.           |
| **`--text-success-subtle`**          | Subtle success text for secondary positive content.              |
| **`--text-success-base`**            | Default success text color for positive feedback or actions.     |
| **`--text-success-bold`**            | Bold success text for emphasis on positive feedback.             |
| **`--text-success-hover`**           | Success text color for hover states.                             |
| **`--text-success-active`**          | Success text color for active or pressed states.                 |
| **`--text-success-inverted`**        | Success text color for inverted or dark backgrounds.             |
| **`--text-success-selected`**        | Success text color for selected states.                          |
| **`--text-success-placeholder`**     | Success text color for placeholders.                             |
| **`--text-success-disabled`**        | Muted success text color for disabled or inactive states.        |
| **`--text-warning-subtle`**          | Subtle warning text for secondary cautionary content.            |
| **`--text-warning-base`**            | Default warning text color for cautionary feedback or alerts.    |
| **`--text-warning-bold`**            | Bold warning text for emphasis on cautionary feedback.           |
| **`--text-warning-hover`**           | Warning text color for hover states.                             |
| **`--text-warning-active`**          | Warning text color for active or pressed states.                 |
| **`--text-warning-inverted`**        | Warning text color for inverted or dark backgrounds.             |
| **`--text-warning-selected`**        | Warning text color for selected states.                          |
| **`--text-warning-placeholder`**     | Warning text color for placeholders.                             |
| **`--text-warning-disabled`**        | Muted warning text color for disabled or inactive states.        |
| **`--text-danger-subtle`**           | Subtle danger text for secondary critical content.               |
| **`--text-danger-base`**             | Default danger text color for critical feedback or errors.       |
| **`--text-danger-bold`**             | Bold danger text for emphasis on critical feedback.              |
| **`--text-danger-hover`**            | Danger text color for hover states.                              |
| **`--text-danger-active`**           | Danger text color for active or pressed states.                  |
| **`--text-danger-inverted`**         | Danger text color for inverted or dark backgrounds.              |
| **`--text-danger-selected`**         | Danger text color for selected states.                           |
| **`--text-danger-placeholder`**      | Danger text color for placeholders.                              |
| **`--text-danger-disabled`**         | Muted danger text color for disabled or inactive states.         |
| **`--text-advertising-subtle`**      | Subtle advertising text for secondary promotional content.       |
| **`--text-advertising-base`**        | Default advertising text color for promotional content.          |
| **`--text-advertising-bold`**        | Bold advertising text for emphasis on promotional content.       |
| **`--text-advertising-hover`**       | Advertising text color for hover states.                         |
| **`--text-advertising-active`**      | Advertising text color for active or pressed states.             |
| **`--text-advertising-inverted`**    | Advertising text color for inverted or dark backgrounds.         |
| **`--text-advertising-selected`**    | Advertising text color for selected states.                      |
| **`--text-advertising-placeholder`** | Advertising text color for placeholders.                         |
| **`--text-advertising-disabled`**    | Muted advertising text color for disabled or inactive states.    |

#### Links

| **Token Name**              | **Purpose**                                                              | **Use Cases**                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`--link-base`**           | Default state of a link, representing its normal appearance.             | - Primary appearance of all links. <br> - Used on text links, buttons, and navigation items.<br> - Must ensure clear visibility against the background surface. |
| **`--link-active`**         | Indicates the state of a link when it is actively being interacted with. | - Applied when a link is clicked or pressed. <br> - Provides feedback during user interaction.                                                                  |
| **`--link-visited`**        | Represents a link that has already been visited by the user.             | - For links leading to pages the user has previously visited.<br> - Helps differentiate visited and unvisited links.                                            |
| **`--link-visited-active`** | Indicates a visited link in its active (pressed) state.                  | - Applied to visited links when they are actively clicked. <br> - Provides consistent feedback for previously visited links.                                    |
| **`--link-disabled`**       | Represents a link that is unavailable for interaction.                   | - Used on links that are inactive or non-clickable (e.g., due to permissions or temporary unavailability).<br> - Conveys a disabled state with muted styling.   |

#### Scroll

| **Token Name**                | **Purpose**                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------- |
| **`--scroll-track`**          | Default color for the scrollbar track (the background area).                      |
| **`--scroll-track-hover`**    | Hover state color for the scrollbar track, enhancing visibility.                  |
| **`--scroll-track-active`**   | Active or pressed state color for the scrollbar track.                            |
| **`--scroll-track-disabled`** | Muted color for scrollbars when the element is inactive or scrolling is disabled. |
| **`--scroll-thumb`**          | Default color for the scrollbar thumb (the draggable element).                    |
| **`--scroll-thumb-hover`**    | Hover state color for the scrollbar thumb, enhancing interactivity.               |
| **`--scroll-thumb-active`**   | Active or pressed state color for the scrollbar thumb.                            |

#### TBD

- Radio button
- Checkbox
- Input
- Dropdown / Select
- Textarea
- Date picker
- Progressbar
- Table
