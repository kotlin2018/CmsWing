// +----------------------------------------------------------------------
// | CmsWing [ 网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015-2115 http://www.cmswing.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: arterli <arterli@qq.com>
// +----------------------------------------------------------------------

module.exports = class extends think.cmswing.extAdmin {
  /**
   * index action
   * 插件管理入口
   * @return {Promise} []
   */
  async indexAction() {
    // 分页列表实例
    const userlist = await this.model('ext_weibo').page(this.get('page'), 20).order('id DESC').countSelect();
    const html = this.pagination(userlist);
    this.assign('pagerData', html); // 分页展示使用
    this.assign('list', userlist.data);
    // 入口模版渲染
    return this.extDisplay();
  }
};
