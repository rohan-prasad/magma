/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

export type FeatureID =
  | 'lte_network_metrics'
  | 'sso_example_feature'
  | 'audit_log_example_feature'
  | 'audit_log_view'
  | 'third_party_devices'
  | 'network_topology'
  | 'site_survey'
  | 'alerts'
  | 'alert_receivers'
  | 'alert_routes'
  | 'alert_suppressions'
  | 'equipment_export'
  | 'file_categories'
  | 'floor_plans'
  | 'grafana_metrics'
  | 'work_order_map'
  | 'documents_site'
  | 'coverage_maps'
  | 'logs'
  | 'services'
  | 'planned_equipment'
  | 'multi_subject_reports'
  | 'equipment_live_status'
  | 'logged_out_alert'
  | 'deprecated_imports'
  | 'external_id'
  | 'checklistcategories'
  | 'saved_searches'
  | 'user_management_dev'
  | 'permission_policies'
  | 'permissions_ui_enforcement'
  | 'graph_event_logging'
  | 'dashboard_v2'
  | 'work_order_activities_hook'
  | 'work_order_activities_display';
